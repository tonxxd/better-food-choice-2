
import 'babel-polyfill'
import BetterFoodChoice from "./BetterChoices/App";
import Survey from "./Survey";
import Cart from './Cart';
import Tracker from './Tracker';
import $ from 'jquery';


const initApp = (tracker = new Tracker(localStorage.getItem("UserID"))) => {
  
  // track page
  tracker.trackPage()
  
  const App = new BetterFoodChoice();
  App.init();

  window.BetterFoodChoiceCart = new Cart();
  window.BetterFoodChoiceCart.render()
  window.BetterFoodChoiceCart.onAddToCart = (product) => {
    tracker.trackEvent("addToCart", product)
  }
  window.BetterFoodChoiceCart.onRemoveFromCart = (product) => {
    tracker.trackEvent("removeFromCart", product)
  }

  window.BetterFoodChoiceCart.onFinishStudy = (basket) => {
    tracker.trackEvent("finishStudy", basket);
    alert("Thanks!")
    $("#bfcCart").remove();
    
  }

}


// run app if already did survey
if(localStorage.getItem('IntroSurvey')=='true'){
  initApp()
}


// init survey 
chrome.runtime.onMessage.addListener(function(request) {
      if (request.payload.action == "startSurvey"){

        // set user id
        localStorage.setItem('UserID',request.payload.userID)

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