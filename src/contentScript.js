import 'babel-polyfill'
import BetterFoodChoice from "./BetterChoices/App";
import Survey from "./Survey";
import Cart from './Cart';
import Tracker from './Tracker';
import $ from 'jquery';
import Storage from './utils/storage';

import * as firebase from "firebase/app";
import 'firebase/functions';
import 'firebase/analytics'

firebase.initializeApp({
  apiKey: "AIzaSyBM6HFn1IcCRG5riHOwXfi8gniSKxygnxU",
  authDomain: "better-food-choices.firebaseapp.com",
  databaseURL: "https://better-food-choices.firebaseio.com",
  projectId: "better-food-choices",
  storageBucket: "better-food-choices.appspot.com",
  messagingSenderId: "335848923235",
  appId: "1:335848923235:web:bcfb776fb74a7a22cc9856",
  measurementId: "G-B6L0MX1MYT"
});


(async () => {



  /**
   *  initialize app
   * function is called every time the page loads
   * default tracker if not itialized with survey
   *
   * @param {string} [tracker=new Tracker(await Storage.get("bfc:userID"))]
   */
  const initApp = async (tracker) => {


    console.log("INIT Better Food Choices Extension")

    // check region

    // track page
    if (!tracker) tracker = new Tracker(await Storage.get("bfc:userID"));


    // init main plugin class
    const App = new BetterFoodChoice(tracker);
    App.init(await Storage.get("bfc:studyGroup"));

    console.log(await Storage.get("bfc:studyGroup"), await Storage.get("bfc:studyStatus"))

    // if study completed disable cart
    if (await Storage.get("bfc:studyStatus") == 2)
      return

    // init cart class
    window.BetterFoodChoiceCart = new Cart();
    window.BetterFoodChoiceCart.render()

    // track events
    window.BetterFoodChoiceCart.onAddToCart = async (product) => {
      tracker.trackEvent("track_cart", {
        add_remove: 'add',
        product
      })
    }

    window.BetterFoodChoiceCart.onRemoveFromCart = (product) => {
      tracker.trackEvent("track_cart", {
        add_remove: 'remove',
        product
      })
    }

    // on finished study
    window.BetterFoodChoiceCart.onFinishStudy = async (basket) => {

      // set finish study
      Storage.set("bfc:studyStatus", 2)

      tracker.trackEvent("finish_study", basket);

      BetterFoodChoice.showAlert('Thank you!', 'You completed the study. Pressing close you will be redirected to the final survey', async () => {
        // redirect to survey
        // group
        const group = await Storage.get('bfc:studyGroup');
        const country = await Storage.get('bfc:country');
        const userID = await Storage.get('bfc:userID')
        let q = '';
        switch (group) {
          case 'A':
            q = country == 'de' ? 'PQDET2' : 'PQCHT2';
            break;
          case 'B':
            q = country == 'de' ? 'PQDET' : 'PQCHT';
            break;
          case 'C':
            q = country == 'de' ? 'PQDEC' : 'PQCHC';
            break;
        }

        window.location.href = `https://www.soscisurvey.de/NUS_1/?r=${userID}&q=${q}`
        $("#bfcCart").remove();
      })

    }

    

  }

  const initSurvey = async () => {
    const survey = new Survey(await Storage.get("bfc:country"))
    survey.render(async (data) => {

      // language change
      Storage.set("bfc:country", data.country)

      // init tracker
      const tracker = new Tracker(await Storage.get("bfc:userID"))


      // send infos to backed
      let studyGroup = await tracker.trackEvent('survey', data)

      // set study group
      Storage.set('bfc:studyGroup', studyGroup)

      // callback when done survey  
      initApp(tracker)

      // set did intro survey
      Storage.set("bfc:introSurvey", 'true')

    });
  }


  // run app if already did survey
  if (await Storage.get('bfc:introSurvey') == 'true') {
    initApp()
  }

  // if not completed survey
  if(! await Storage.get('bfc:introSurvey') && await Storage.get("bfc:studyStatus") == '1'){
    initSurvey()
  }


  // init survey 
  chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

    if (request.payload.action == "bfc:startSurvey") {

      // set user id
      Storage.set('bfc:userID', request.payload.userID)

      // set study status 
      Storage.set('bfc:studyStatus', 1)

      // set study status 
      Storage.set('bfc:country', request.payload.lang)

      initSurvey();

    }

    // update status in popup
    if (request.payload.action === 'bfc:getStudyStatus') {
      sendResponse(await Storage.get("bfc:studyStatus") || 0)
    }
  });


  // add Roboto font
  $("head").append('<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">')

})()