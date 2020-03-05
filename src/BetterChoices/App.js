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
import { RestartIcon } from "../Cart/icons";
import { toast } from "react-toastify";



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
            // hide elements
            (document.getElementById("info")||{style:{opacity:0}}).style.opacity=0;

            // delete ads
            this.store.clean();

            // prevent default action migros add to cart
            // this.store.blockAddToCart()

            this.store.changeLogoLink()

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

                    // show loader

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
                    addToCartButton.addClass("bfcAltered")
                    addToCartButton.off("click") // delete events

                    // listen to click
                    addToCartButton.on("click", async (e) => {
                        e.stopPropagation()
                        e.preventDefault();

                        const productData = await this.store.getProductData();

                        console.log(productData)
                        // block if no price
                        if (productData.price == '0.00' || productData.price =="" || productData.price == 'NaN' || productData.price == '0' || !productData.price) {
                            toast.warn("Produkt derzeit nicht verfügbar!")
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

                    // show elements
                    document.getElementById("info").style.opacity=1;


                    break;


                case this.store.pageTypes.PRODUCTOVERVIEWPAGE: // overview page


                    // instantiate scraper
                    const scraper = new Scraper();

                    // bodies
                    let bodiesDB = {}

                    const $this = this;
                        $("body").on("click", '.mui-js-shoppinglist-item-add-bfc', function(e){
                            e.preventDefault()
                            e.stopPropagation()

                            const $el = $(this);

                            (async () => {

                                const body = bodiesDB[$this.store.getClosestListItem($el).attr("bfcid")][0]
    
                                const productData = await $this.store.getProductData(body);
    
                                // block if no price
                                console.log(productData)
                                if (productData.price == '0.00' || productData.price =="" || productData.price == 'NaN' || productData.price == '0' || !productData.price) {
                                    toast.warn("Produkt derzeit nicht verfügbar!")
                                    return
                                }
                                //Add to cart
                                window.BetterFoodChoiceCart.addProduct({
                                    currency: await Storage.get("bfc:country") === 'de' ? 'eur' : 'chf',
                                    gtin: $this.store.getGTIN(body),
                                    ...productData,
                                    nutriScore: bodiesDB[$this.store.getClosestListItem($el).attr("bfcid")][1]
                                })
                            })()

                            

                        })

                    let prevLength = 0;
                    // iterate product tiles
                    const iterateProducts = async () => {



                        // hide
                        this.store.hideProducts()


                        // get all urls from product list
                        let allUrls = this.store.getUrlsFromOverview();
                        if(prevLength === allUrls.length)
                            return

                        prevLength = allUrls.length;
                        this.store.editUrlsFromOverview();

                        // scrape urls in small batches to improve performances and prevent abuse
                        scraper.scrapeBatch(allUrls, (urlsSlice, bodies) => {


                            // calculate score
                            bodies.forEach(async (b, index) => {

                                if(this.store.listItemFromHref(urlsSlice[index]).hasClass("dontTouch"))
                                    return
                                this.store.listItemFromHref(urlsSlice[index]).addClass("dontTouch")

                                const remoteData = await this.store.loadProductData(this.store.getGTIN(b))
                                const remoteNutriScore = remoteData ? remoteData.nutri_score_final : false;
                                if (settings.showDifferentNutriAlert) alert(`Different ${remoteNutriScore} ${localNutriScore}`)
                                const localNutriScore = getScoreLocal(
                                    this.store.getProductCategory(b),
                                    this.store.getFoodValues(b)
                                )
                                const nutri_score_final = remoteNutriScore || localNutriScore

                                displayScore(
                                    nutri_score_final,
                                    group,
                                    this.store.listItemTargetFromHref(urlsSlice[index]),
                                    'small'
                                )

                                // store body
                                bodiesDB[this.store.listItemFromHref(urlsSlice[index]).attr("bfcid")] = [b,nutri_score_final]

                                // convert price
                                this.store.changePriceList(this.store.listItemFromHref(urlsSlice[index]), this.store.getProductCategory(b))
                                
                            });

                            // // listen to add to cart events
                            // urlsSlice.forEach((e, i) => {

                            //     // delete all events
                            //     const addToCartButton = this.store.getAddToCartButton(this.store.listItemFromHref(e))
                            //     addToCartButton.addClass("bfcAltered")
                            //     addToCartButton.off('click');

                            //     // listen to click
                            //     addToCartButton.on("click", async (e) => {
                            //         e.stopPropagation()
                            //         e.preventDefault();

                            //         const productData = await this.store.getProductData(bodies[i]);

                            //         // block if no price
                            //         if (productData.price == '') {
                            //             alert("Product currently unavailable!")
                            //             return
                            //         }
                            //         //Add to cart
                            //         window.BetterFoodChoiceCart.addProduct({
                            //             currency: await Storage.get("bfc:country") === 'de' ? 'eur' : 'chf',
                            //             gtin: this.store.getGTIN(bodies[i]),
                            //             ...productData,
                            //             nutriScore: nutriscores[i]
                            //         })
                            //     })

                            // })

                        });


                        




                    }

                    const observer1 = new MutationObserver(()=>{
                        if($('.mui-js-product-list').length){
                            // configure observer
                            const observer = new MutationObserver(iterateProducts)
                            observer.observe($('.mui-js-product-list')[0], {
                                subtree: false,
                                childList: true
                            });

                            iterateProducts()
                        }
                    })
                    observer1.observe(document.body, {
                        subtree: true,
                        childList: true
                    });


                    

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

    static showAlert(title, text, actionHandler, actionHandlerLabel='close', alternativeAction = false, alternativeActionLabel="Yes") {
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
        }).text(actionHandlerLabel).on("click", (e) => {
            e.preventDefault();
            $alertWrapper.remove();
            actionHandler()
        })
        const $alternativeAction = alternativeAction ? $("<button />").css({
            background: '#00d1b2',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 4,
            marginTop: 20
        }).text(alternativeActionLabel).on("click", (e) => {
            e.preventDefault();
            $alertWrapper.remove();
            alternativeAction()
        }):$("<p>")

        $("body").append($alertWrapper.append($alert.append($h1, $p, $action,$alternativeAction)));

    }

    static async showRestartButton() {
        const button = $("<div />").attr("id","bfcRestartBtn").on("click", async ()=>{
            await Storage.clear()
            window.location.reload()
        }).html(RestartIcon)
        $("body").prepend(button)
    }

    static async showTaskDesc(index, actionHandler) {

        const $alertWrapper = $("<div id='bfcTask' />").css({
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
        $alertWrapper.append($("<style>").html("#bfcTask img{max-width: 100%; max-height: 400px}"))
        const $alert = $('<div />').css({
            width: '800px',
            padding: 30,
            textAlign: 'left',
            display: 'inline-block',
            background: 'white',
            borderRadius: 5,
            boxShadow: '0 5px 10px rgba(0,0,0,.2)'
        })
        const $p = $("<div/>").css({}).html(taskDesc[index](await Storage.get("bfc:studyGroup"),await Storage.get("bfc:country")))
        const $action = $("<button />").css({
            background: 'rgba(0,0,0,.4)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 4,
            marginTop: 20
        }).text(index == 2 ? 'Schließen' : 'Weiter').on("click", (e) => {
            e.preventDefault();
            $alertWrapper.remove();
            actionHandler()
        })

        $("body").append($alertWrapper.append($alert.append($p, $action)));

    }

    async trackPage() {

        const GTIN = this.store.getGTIN();
        await this.store.loadProductData(GTIN);

        const remoteNutriScore = this.store.products[GTIN].nutri_score_final;
        const localNutriScore = getScoreLocal(
            this.store.getProductCategory(),
            this.store.getFoodValues()
        );
        const nutri_score_final = remoteNutriScore || localNutriScore;


        this.tracker.trackPage(this.store.getPageCategory(), window.location.href, $("title").text(), GTIN, nutri_score_final, this.store.getFoodValues());
        window.onhashchange = function () {
            this.tracker.stop()
            this.tracker.trackPage(this.store.getPageCategory(), window.location.href, $("title").text(), GTIN,nutri_score_final,this.store.getFoodValues());
        }
    }

}

export default BetterFoodChoice;