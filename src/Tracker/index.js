import Axios from "axios"
import {
    API
} from "../config"
import * as firebase from "firebase/app";
import Storage from "../utils/storage";
import $ from 'jquery'

class Tracker {
    constructor(userID) {

        this.userID = userID;

        window.addEventListener('beforeunload', ()=>{
            if (this.currentPage) {
                this.stop()
            }
        });

    }

    async stop(){
        const end = new Date();
        this.trackEvent('track_page', {
            timeSpent: end - this.currentPage.start,
            pageUrl: this.currentPage.url,
            category: this.currentPage.category,
            gtin: this.currentPage.gtin,
            title: this.currentPage.title,
            nutritionTable: this.currentPage.nutritionTable,
            nutri_score: this.currentPage.nutri_score
        })
        this.currentPage = false 
    }



    async trackPage(category, url, title, gtin = false, nutri_score = false, nutritionTable=false) {
        const start = new Date();
        this.currentPage = {
            start,
            category,
            url,
            gtin,
            nutritionTable,
            nutri_score,
            title
        }
    }

    async trackEvent(action, value) {
        let {
            data
        } = await Axios.post(API.trackingEndPoint, {
            action,
            userID: await Storage.get('bfc:userID'),
            value
        });

        return data // chosen group
    }
}

export default Tracker;