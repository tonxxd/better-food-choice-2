import 'babel-polyfill'
import BetterFoodChoice from "./BetterChoices/App";
import Survey from "./Survey";
import Cart from './Cart';
import Tracker from './Tracker';
import $ from 'jquery';
import Storage from './utils/storage';


(async () => {



  /**
   *  initialize app
   * function is called every time the page loads
   * default tracker if not itialized with survey
   *
   * @param {string} [tracker=new Tracker(await Storage.get("bfc:userID"))]
   */
  const initApp = async (tracker) => {

    if(!tracker) tracker = new Tracker(await Storage.get("bfc:userID"));

    console.log("INIT Better Food Choices Extension")

    // track page
    tracker.trackPage()

    // init main plugin class
    const App = new BetterFoodChoice();
    App.init(await Storage.get("bfc:studyGroup"));

    console.log(await Storage.get("bfc:studyGroup"), await Storage.get("bfc:studyStatus"))

    // if study completed disable cart
    if (await Storage.get("bfc:studyStatus") == 2)
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
    window.BetterFoodChoiceCart.onFinishStudy = async (basket) => {

      // set finish study
      Storage.set("bfc:studyStatus", 2)

      tracker.trackEvent("finishStudy", basket);

      App.showAlert('Thank you!', 'You completed the study', () => {
        $("#bfcCart").remove();
      })

    }

  }


  // run app if already did survey
  if (await Storage.get('bfc:introSurvey') == 'true') {
    console.log(await Storage.get('bfc:introSurvey'))
    initApp()
  }


  // init survey 
  chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

    if (request.payload.action == "bfc:startSurvey") {

      // set user id
      Storage.set('bfc:userID', request.payload.userID)

      // set study status 
      Storage.set('bfc:studyStatus', 1)

      // set study group
      Storage.set('bfc:studyGroup', request.payload.studyGroup)


      const survey = new Survey(request.payload.lang)
      survey.render(async (data) => {

        // language change
        Storage.set("bfc:country", data.lang)
        // TODOOO send changed lang to extension 

        // init tracker
        const tracker = new Tracker(request.payload.userID)


        // send infos to backed
        tracker.trackSurvey({
          userID: await Storage.get('bfc:userID'),
          data
        })

        // callback when done survey  
        initApp(tracker)

        // set did intro survey
        Storage.set("bfc:introSurvey", 'true')
        // TODO send to extension

      });

    }

    // update status in popup
    if (request.payload.action === 'bfc:getStudyStatus') {
      sendResponse(await Storage.get("bfc:studyStatus") || 0)
    }
  });


  // add Roboto font
  $("head").append('<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">')

})()