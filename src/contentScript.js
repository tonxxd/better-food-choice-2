
import 'babel-polyfill'
import BetterFoodChoice from "./BetterChoices/App";
import Survey from "./Survey";
import Cart from './Cart';
import Tracker from './Tracker';
import $ from 'jquery';


const initApp = (tracker = new Tracker(localStorage.getItem("UserID"))) => {
  
  // track page
  tracker.trackPage()
  
  // init main plugin class
  const App = new BetterFoodChoice();
  App.init(localStorage.getItem("StudyGroup"));

  // init cart class
  window.BetterFoodChoiceCart = new Cart();
  window.BetterFoodChoiceCart.render()
  
  // track events
  window.BetterFoodChoiceCart.onAddToCart = (product) => {
    tracker.trackEvent("addToCart", product)
  }
  window.BetterFoodChoiceCart.onRemoveFromCart = (product) => {
    tracker.trackEvent("removeFromCart", product)
  }

  // on finished study
  window.BetterFoodChoiceCart.onFinishStudy = (basket) => {
    
    tracker.trackEvent("finishStudy", basket);
    

    App.showAlert('Thank you!', 'You completed the study', ()=>{
      $("#bfcCart").remove();
    })
    
    /**
     * chrom bug, if just send the message to popup it gets Unchecked error
     * solution from  https://stackoverflow.com/questions/54181734/chrome-extension-message-passing-unchecked-runtime-lasterror-could-not-establi
     *
     */
    const ping = () => {
      chrome.runtime.sendMessage({action: "bfc:studyFinish"}, response => {
        if(chrome.runtime.lastError) {
          setTimeout(ping, 1000);
        }
      });
    }
    ping();
    
  }

}


// run app if already did survey
if(localStorage.getItem('IntroSurvey')=='true'){
  initApp()
}


// init survey 
chrome.runtime.onMessage.addListener(function(request) {
      if (request.payload.action == "bfc:startSurvey"){

        console.log(request)

        // set user id
        localStorage.setItem('UserID',request.payload.userID)

        // set study group
        localStorage.setItem('StudyGroup',request.payload.studyGroup)


        const survey = new Survey(request.payload.lang)
        survey.render((data) => {
          
          // language change
          localStorage.setItem("CountryName", data.lang)

          // init tracker
          const tracker = new Tracker(request.payload.userID)


          // send infos to backed
          tracker.trackSurvey({
            userID: localStorage.getItem('UserID'),
            data 
          })

          // callback when done survey  
          initApp(tracker)
        
          // set did intro survey
          localStorage.setItem("IntroSurvey",'true')
        
        });

      }
});