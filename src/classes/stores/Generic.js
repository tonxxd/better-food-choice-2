
import $ from 'jquery';
import Axios from 'axios';
import { API } from '../../config';

class Generic {

    constructor(){

        this.product = {

        }

        this.pageTypes = {
            SINGLEPRODUCTPAGE: 'generic.singleproduct',
            PRODUCTOVERVIEWPAGE: 'generic.productoverview',
            UNKNOWN: 'generic.unknown'
        }
    }

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
                this.product = response.data.products[0]
            }
            return this.product
        }catch(e){
            console.log("The product is not availabe in the database.");      
        }

    }


    getName(){
        return 'Generic'
    }

    getPageType(){
        return window.location.pathname;
    }


    clean(){
        
    }
}

export default Generic