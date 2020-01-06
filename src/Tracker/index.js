
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
        console.log(info)
    }

    trackEvent(name, value){
        console.log(name, value)
    }
}

export default Tracker;