
class Tracker {
    constructor(userID){

        this.userID = userID

    }

    trackPage(){
        const info = {
            timestamp: new Date().getTime(),
            pageTitle: document.title,
            pageUrl: window.location.href,
            userID: this.userID
        }
        console.log("track page", info)
    }

    trackSurvey(data){
        console.log("track survey", data)
    }

    trackEvent(name, value){
        console.log("track event", name, value)
    }
}

export default Tracker;