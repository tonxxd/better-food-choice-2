
import 'babel-polyfill'
import BetterFoodChoice from "./BetterChoices/App";
import Survey from "./Survey";
import Cart from './Cart';
import Tracker from './Tracker';
import $ from 'jquery';


/**
 *  initialize app
 * function is called every time the page loads
 * default tracker if not itialized with survey
 *
 * @param {string} [tracker=new Tracker(localStorage.getItem("bfc:userID"))]
 */
const initApp = (tracker = new Tracker(localStorage.getItem("bfc:userID"))) => {
  
  // track page
  tracker.trackPage()
  
  // init main plugin class
  const App = new BetterFoodChoice();
  App.init(localStorage.getItem("bfc:studyGroup"));

  // if study completed disable cart
  if(localStorage.getItem("bfc:studyStatus") == 2)
    return

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

    // set finish study
    localStorage.setItem("bfc:studyStatus",2)
    
    tracker.trackEvent("finishStudy", basket);
    
    App.showAlert('Thank you!', 'You completed the study', ()=>{
      $("#bfcCart").remove();
    })
    
  }

}


// run app if already did survey
if(localStorage.getItem('bfc:introSurvey')=='true'){
  initApp()
}


// init survey 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

      if (request.payload.action == "bfc:startSurvey"){

        // set user id
        localStorage.setItem('bfc:userID',request.payload.userID)

        // set study status 
        localStorage.setItem('bfc:studyStatus',1)

        // set study group
        localStorage.setItem('bfc:studyGroup',request.payload.studyGroup)


        const survey = new Survey(request.payload.lang)
        survey.render((data) => {
          
          // language change
          localStorage.setItem("bfc:country", data.lang)

          // init tracker
          const tracker = new Tracker(request.payload.userID)


          // send infos to backed
          tracker.trackSurvey({
            userID: localStorage.getItem('bfc:userID'),
            data 
          })

          // callback when done survey  
          initApp(tracker)
        
          // set did intro survey
          localStorage.setItem("bfc:introSurvey",'true')
        
        });

      }

      // update status in popup
      if(request.payload.action === 'bfc:getStudyStatus'){
        sendResponse(localStorage.getItem("bfc:studyStatus") || 0)
      }
});