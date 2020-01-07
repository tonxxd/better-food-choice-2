
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

        // TODO send data
    }

    trackSurvey(data){
        console.log("track survey", data)
        // TODO send data
    }

    trackEvent(name, value){
        console.log("track event", name, value)
        // TODO send data
    }
}

export default Tracker;