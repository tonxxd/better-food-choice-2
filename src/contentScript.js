
import 'babel-polyfill'
import BetterFoodChoice from "./BetterChoices/App";
import Survey from "./Survey";

// run app if already did survey
if(localStorage.getItem('IntroSurvey'=='true')){
  const App = new BetterFoodChoice();
  App.init();
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

          // send infos to backed
          console.log({
            userID: localStorage.getItem('UserID'),
            data 
          })

          // callback when done survey  
          const App = new BetterFoodChoice();
          App.init() // group default = A, user id from local storage
        
          // set did intro survey
          localStorage.setItem("IntroSurvey",'true')
        
        });

      }
});