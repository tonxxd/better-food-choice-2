
import Axios from 'axios';
import { API } from '../../config';

/**
 * Generic class fro stores to be extended
 *
 * @class Generic
 */
class Generic {

    constructor(){

        this.products = {}

        this.pageTypes = {
            SINGLEPRODUCTPAGE: 'generic.singleproduct',
            PRODUCTOVERVIEWPAGE: 'generic.productoverview',
            UNKNOWN: 'generic.unknown'
        }
    }

    /**
     * call api for data
     *
     * @param {*} GTIN
     * @returns
     * @memberof Generic
     */
    async loadProductData(GTIN){
        try{
            let response = await Axios.get(API.endpoint(GTIN), {
                auth: {
                    username: API.username,
                    password: API.password
                }
            });

            if(!response.data.products){
                //TODO 
                throw "invalid";      
            }else{
                this.products[GTIN] = response.data.products[0]
            }
            return this.products[GTIN]
        }catch(e){
            console.log("The product is not availabe in the database.");      
        }

    }


    getPageType(){
        return window.location.pathname;
    }


    clean(){
        
    }
}

export default Generic