import $ from 'jquery';
import Axios from 'axios';
import { settings } from '../config';
import Migros from './stores/Migros';

class Scraper {
    constructor(){
        // prevent multiple scrape batch when change page
        this.Scraping = false;
    }

    async scrapeBatch(urls, batchHandler){

        const id = urls[0];
        this.Scraping = id;

        for(let i=0; i<urls.length; i+= settings.overviewBatchSize){

            // break if change page
            // if(this.Scraping != id)
            //     return
            
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