import Migros from "./stores/Migros";
import { getScoreLocal, displayScore } from "./NutriScore";


class BetterFoodChoice {
    constructor(){
        // detect store
        this.getStore();
    }

    async init(group = 'A'){

        try {
            // delete ads
            //this.store.clean();
            
            // action based on page
            const pageType = this.store.getPageType();

            switch(pageType){
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

                    break;
                case this.store.pageTypes.PRODUCTOVERVIEWPAGE:
                    // iterate products
                    

                    break;
            }
        }catch(e){
            console.log(e)
        }
    }


    getStore(){
        if(!this.store){
            //calculate
            const url = window.location.hostname;
            console.log(url)
            if(url.indexOf('migros')>-1)
                this.store = new Migros();
        }

        return this.store;
    }
}

export default BetterFoodChoice;