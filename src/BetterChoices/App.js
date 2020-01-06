import Migros from "./stores/Migros";
import {
    getScoreLocal,
    displayScore
} from "./NutriScore";
import Scraper from "./Scraper";
import { settings } from "../config";


class BetterFoodChoice {
    constructor(lang) {

        // detect user country
        localStorage.setItem('CountryName', lang || 'de')

        // detect store
        this.getStore();
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

            // action based on page
            const pageType = this.store.getPageType();

            switch (pageType) {
                case this.store.pageTypes.SINGLEPRODUCTPAGE:   // single product
                    
                    
                    // retrieve GTIN
                    const GTIN = this.store.getGTIN();

                    // load product
                    if(!settings.disableApi)
                        await this.store.loadProductData(GTIN);

                    // display score or from api or calculated locally
                    const remoteNutriScore = this.store.products[GTIN].nutri_score_final;
                    const localNutriScore = getScoreLocal(
                        this.store.getProductCategory(),
                        this.store.getFoodValues()
                    );

                    if(remoteNutriScore != localNutriScore)
                        alert(`Different ${remoteNutriScore} ${localNutriScore}`)
                    const nutri_score_final = remoteNutriScore || localNutriScore
                        
                    // display score
                    displayScore(
                        nutri_score_final,
                        group,
                        this.store.getBadgeParent()
                    )

                    // currency converter
                    this.store.changePrice()

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

                        if(allUrls[0]!=urls[0])
                            urls = []


                        // if list not changed return
                        if(allUrls.length === urls.length)
                            return
                        
                        // filter urls to be scraped
                        let toScrape = allUrls.filter(u => urls.indexOf(u) < 0);

                        // scrape urls in small batches to improve performances and prevent abuse
                        scraper.scrapeBatch(toScrape, (urlsSlice, bodies) => {
                            // calculate score
                            bodies.forEach((b, index) => {
                                const nutri_score_final = getScoreLocal(
                                    this.store.getProductCategory(b),
                                    this.store.getFoodValues(b)
                                    )
                                displayScore(
                                    nutri_score_final, 
                                    group, 
                                    this.store.listItemTargetFromHref(urlsSlice[index]),
                                    'small'
                                    )
                            })
                            // update scraper urls
                            urls = [...urls, ...urlsSlice];
                        });
                        
                        

                        // convert prices
                        this.store.changePriceList()
                    }

                    // configure observer
                    const observer = new MutationObserver(iterateProducts)
                    observer.observe(document.body, {
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
}

export default BetterFoodChoice;