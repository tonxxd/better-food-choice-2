import $ from 'jquery';
import Axios from 'axios';
import { settings } from '../config';

class Scraper {
    constructor(){

    }

    async scrapeBatch(urls, batchHandler){
        for(let i=0; i<urls.length; i+= settings.overviewBatchSize){

            let promises = urls.slice(i,i+settings.overviewBatchSize).map(u => 
                new Promise(async res => {
                    let body = await this.getDataFromUrl(u);
                    res(body);
                })
            )
            let b = await Promise.all(promises);
            batchHandler(urls.slice(i,i+settings.overviewBatchSize), b)
        }
    }

    async getDataFromUrl(url){
        let response = await Axios.get(url);
        let body = $.parseHTML(response.data);
        return body;
    }
}

export default Scraper;