import Migros from "./stores/Migros";
import {
    getScoreLocal,
    displayScore
} from "./NutriScore";
import Scraper from "./Scraper";


class BetterFoodChoice {
    constructor() {

        // detect user country
        localStorage.setItem('CountryName', 'Germany')

        // detect store
        this.getStore();
    }

    async init(group = 'A') {

        try {
            // delete ads
            //this.store.clean();

            // action based on page
            const pageType = this.store.getPageType();

            switch (pageType) {
                case this.store.pageTypes.SINGLEPRODUCTPAGE:
                    
                    
                    // retrieve GTIN
                    const GTIN = this.store.getGTIN();

                    // load product
                    await this.store.loadProductData(GTIN);

                    // display score
                    const nutri_score_final = this.store.product.nutri_score_final ||
                        getScoreLocal(
                            this.store.getProductCategory(),
                            this.store.getFoodValues()
                        );

                    displayScore(
                        nutri_score_final,
                        group,
                        this.store.getBadgeParent()
                    )

                    this.store.changePrice()

                    break;
                case this.store.pageTypes.PRODUCTOVERVIEWPAGE:

                    // iterate products
                    const scraper = new Scraper();

                    // urls already scraped
                    let urls = [];

                    const observer = new MutationObserver(async () => {
                        
                        let allUrls = this.store.getUrlsFromOverview();

                        if(allUrls.length === urls.length)
                            return

                        let toScrape = allUrls.filter(u => urls.indexOf(u) < 0);
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
                        });
                        
                        urls = [...urls, ...toScrape];


                        
                        
                        this.store.changePriceList()
                        

                    })

                    observer.observe(this.store.overviewTarget, {
                        subtree: true,
                        childList: true
                    })

                    break;
            }
        } catch (e) {
            console.log(e)
        }
    }


    getStore() {
        if (!this.store) {
            //calculate
            const url = window.location.hostname;
            if (url.indexOf('migros') > -1)
                this.store = new Migros();
        }

        return this.store;
    }
}

export default BetterFoodChoice;