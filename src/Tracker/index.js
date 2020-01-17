import Axios from "axios"
import { API } from "../config"
import * as firebase from "firebase/app";
import Storage from "../utils/storage";

class Tracker {
    constructor(userID){

        this.userID = userID

    }

    trackPage(){
        // const info = {
        //     action: 'page',
        //     timestamp: new Date().getTime(),
        //     pageTitle: document.title,
        //     pageUrl: window.location.href,
        //     userID: this.userID
        // }

        // Axios.post(API.trackingEndPoint, info)

        // TODO send data
    }

    trackSurvey(data){
        console.log("track survey", data)
        // let {data} = Axios.post(API.trackingEndPoint, {
        //     action: 'survey',
        //     ...data
        // });
        // return data.group
    }

    async trackEvent(action, value){
        firebase.analytics().logEvent(name, value)
        console.log("track event", action, value)
        let {data} = await Axios.post(API.trackingEndPoint, {
            action,
            userID: await Storage.get('bfc:userID'),
            value
        });
        console.log(data)

        if(action === 'survey')
            return data // chosen group
    }
}

export default Tracker;