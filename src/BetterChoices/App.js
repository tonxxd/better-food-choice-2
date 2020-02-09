import Migros from "./stores/Migros";
import {
    getScoreLocal,
    displayScore
} from "./NutriScore";
import Scraper from "./Scraper";
import {
    settings
} from "../config";
import $ from "jquery";
import Storage from "../utils/storage";
import taskDesc from "./taskDesc";


class BetterFoodChoice {
    constructor(tracker) {


        this.tracker = tracker;

        // detect store
        this.getStore();

        // setup url change polling
        let oldUrl = window.location.href;
        setInterval(() => {
            if (oldUrl !== window.location.href) {
                oldUrl = window.location.href;
                this.tracker.stop()
                this.tracker.trackPage(this.store.getPageCategory(), window.location.href, $("title").text(), this.store.getGTIN());
            }
        }, 1000)

        $(window).on("onbeforeunload", function () {
            this.tracker.stop()
        });


    }


    /**
     *
     *
     * @param {string} [group='A']  Group of the user to display correct badgs
     * @memberof BetterFoodChoice
     */
    async init(group = 'A') {

        try {
            // delete ads
            this.store.clean();

            // set default region
            this.store.setDefaultRegion()

            // set default order
            this.store.setDefaultOrdering()

            // action based on page
            const pageType = this.store.getPageType();

            // track page
            this.trackPage()

            switch (pageType) {
                case this.store.pageTypes.SINGLEPRODUCTPAGE: // single product


                    // retrieve GTIN
                    const GTIN = this.store.getGTIN();

                    // load product
                    if (!settings.disableApi)
                        await this.store.loadProductData(GTIN);

                    // display score or from api or calculated locally
                    const remoteNutriScore = this.store.products[GTIN].nutri_score_final;
                    const localNutriScore = getScoreLocal(
                        this.store.getProductCategory(),
                        this.store.getFoodValues()
                    );

                    // if (remoteNutriScore != localNutriScore)
                    if (settings.showDifferentNutriAlert) alert(`Different ${remoteNutriScore} ${localNutriScore}`)
                    const nutri_score_final = remoteNutriScore || localNutriScore

                    // display score
                    displayScore(
                        nutri_score_final,
                        group,
                        this.store.getBadgeParent()
                    )

                    // currency converter
                    this.store.changePrice(false, false, false, this.store.getProductCategory())

                    // listen to add to cart
                    const addToCartButton = this.store.getAddToCartButton().off('click');
                    addToCartButton.off("click") // delete events

                    // listen to click
                    addToCartButton.on("click", async (e) => {
                        e.stopPropagation()
                        e.preventDefault();

                        const productData = this.store.getProductData();

                        // block if no price
                        if (productData.price == '') {
                            alert("Product currently unavailable!")
                            return
                        }

                        //Add to cart
                        window.BetterFoodChoiceCart.addProduct({
                            currency: await Storage.get("bfc:country") === 'de' ? 'eur' : 'chf',
                            gtin: GTIN,
                            ...productData,
                            nutriScore: nutri_score_final
                        })
                    })

                    break;


                case this.store.pageTypes.PRODUCTOVERVIEWPAGE: // overview page


                    // instantiate scraper
                    const scraper = new Scraper();

                    // urls already scraped
                    let urls = [];
                    let currentUrl = window.location.pathname // detect change page to clear urls array

                    // iterate product tiles
                    const iterateProducts = async () => {


                        // get all urls from product list
                        let allUrls = this.store.getUrlsFromOverview();

                        if (allUrls[0] != urls[0])
                            urls = []


                        // if list not changed return
                        if (allUrls.length === urls.length)
                            return

                        // filter urls to be scraped
                        let toScrape = allUrls.filter(u => urls.indexOf(u) < 0);

                        // update urls important 
                        urls = allUrls

                        console.log(urls.length)

                        // scrape urls in small batches to improve performances and prevent abuse
                        scraper.scrapeBatch(toScrape, (urlsSlice, bodies) => {


                            let nutriscores = [];
                            // calculate score
                            bodies.forEach((b, index) => {
                                const nutri_score_final = getScoreLocal(
                                    this.store.getProductCategory(b),
                                    this.store.getFoodValues(b)
                                )
                                nutriscores.push(nutri_score_final)
                                displayScore(
                                    nutri_score_final,
                                    group,
                                    this.store.listItemTargetFromHref(urlsSlice[index]),
                                    'small'
                                )

                                // convert price
                                this.store.changePriceList(this.store.listItemFromHref(urlsSlice[index]), this.store.getProductCategory(b))
                            })

                            // listen to add to cart events
                            urlsSlice.forEach((e, i) => {

                                // delete all events
                                const addToCartButton = this.store.getAddToCartButton(this.store.listItemFromHref(e))
                                addToCartButton.off('click');

                                // listen to click
                                addToCartButton.on("click", async (e) => {
                                    e.stopPropagation()
                                    e.preventDefault();

                                    const productData = this.store.getProductData(bodies[i]);

                                    // block if no price
                                    if (productData.price == '') {
                                        alert("Product currently unavailable!")
                                        return
                                    }
                                    //Add to cart
                                    window.BetterFoodChoiceCart.addProduct({
                                        currency: await Storage.get("bfc:country") === 'de' ? 'eur' : 'chf',
                                        gtin: this.store.getGTIN(bodies[i]),
                                        ...productData,
                                        nutriScore: nutriscores[i]
                                    })
                                })

                            })

                        });




                    }

                    // configure observer
                    const observer = new MutationObserver(iterateProducts)
                    observer.observe(document.body, {
                        subtree: true,
                        childList: true
                    });

                    // iterateProducts()

                    // //page change 
                    // window.onhashchange = () => {
                    //     urls = [];
                    //     setTimeout(()=> {
                    //         iterateProducts()
                    //     },1000)

                    // }


                    break;
            }
        } catch (e) {
            // TOODO handler errors
            console.log(e)
        }
    }


    getStore() {
        if (!this.store) {
            // get score from url to instantiate correct classe
            const url = window.location.hostname;
            if (url.indexOf('migros') > -1)
                this.store = new Migros();
        }

        return this.store;
    }

    static showAlert(title, text, actionHandler) {
        const $alertWrapper = $("<div />").css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,.3)'
        })
        const $alert = $('<div />').css({
            width: '500px',
            padding: 30,
            background: 'white',
            borderRadius: 5,
            boxShadow: '0 5px 10px rgba(0,0,0,.2)'
        })
        const $h1 = $("<h1/>").css({
            color: 'rgba(0,0,0,.6)',
            fontSize: 30,
            margin: '0 0 10px 0',
            fontFamily: 'Roboto'
        }).text(title)
        const $p = $("<p/>").css({
            fontSize: 14,
            color: 'rgba(0,0,0,.4)',
            lineHeight: '1.5',
            margin: 0
        }).text(text)
        const $action = $("<button />").css({
            background: 'rgba(0,0,0,.4)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 4,
            marginTop: 20
        }).text("Close").on("click", (e) => {
            e.preventDefault();
            $alertWrapper.remove();
            actionHandler()
        })

        $("body").append($alertWrapper.append($alert.append($h1, $p, $action)));

    }

    static showTaskDesc(actionHandler) {

        const $alertWrapper = $("<div />").css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999999,
            textAlign: 'center',
            padding: 40,
            justifyContent: 'center',
            overflow: 'scroll',
            background: 'rgba(0,0,0,.3)'
        })
        const $alert = $('<div />').css({
            width: '800px',
            padding: 30,
            textAlign: 'left',
            display: 'inline-block',
            background: 'white',
            borderRadius: 5,
            boxShadow: '0 5px 10px rgba(0,0,0,.2)'
        })
        const $p = $("<div/>").css({}).html(taskDesc)
        const $action = $("<button />").css({
            background: 'rgba(0,0,0,.4)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 4,
            marginTop: 20
        }).text("Close").on("click", (e) => {
            e.preventDefault();
            $alertWrapper.remove();
            actionHandler()
        })

        $("body").append($alertWrapper.append($alert.append($p, $action)));

    }

    trackPage() {
        this.tracker.trackPage(this.store.getPageCategory(), window.location.href, $("title").text(), this.store.getGTIN());
        window.onhashchange = function () {
            this.tracker.stop()
            this.tracker.trackPage(this.store.getPageCategory(), window.location.href, $("title").text(), this.store.getGTIN());
        }
    }

}

export default BetterFoodChoice;