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
    window.BetterFoodChoiceCart.onAddToCart = async (product) => {
      tracker.trackEvent("add_to_cart", {
        quantity: 1,
        item_category: product.category,
        item_name: product.name,
        item_id: product.gtin,
        price: product.price,
        currency: await Storage.get("bfc:country") === 'de' ? 'eur' : 'chf'
      })
    }

    window.BetterFoodChoiceCart.onRemoveFromCart = (product) => {
      tracker.trackEvent("remove_from_cart", product)
    }

    // on finished study
    window.BetterFoodChoiceCart.onFinishStudy = async (basket) => {

      // set finish study
      // Storage.set("bfc:studyStatus", 2)

      // tracker.trackEvent("finish_study", basket);

      App.showAlert('Thank you!', 'You completed the study', async () => {
        // redirect to survey
        // group
        const group = await Storage.get('bfc:studyGroup');
        const country = await Storage.get('bfc:country');
        const userID = await Storage.get('bfc:userID')
        let q = '';
        switch(group){
          case 'A': q = country == 'de' ? 'PQDET2' : 'PQCHT2'; break;
          case 'B': q = country == 'de' ? 'PQDET' : 'PQCHT'; break;
          case 'C': q = country == 'de' ? 'PQDEC' : 'PQCHC'; break;
        }
        console.log(`https://www.soscisurvey.de/NUS_1/?r=${userID}&q=${q}`)
        window.location.href = `https://www.soscisurvey.de/NUS_1/?r=${userID}&q=${q}`
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


      const survey = new Survey(request.payload.lang)
      survey.render(async (data) => {

        // language change
        Storage.set("bfc:country", data.country)
        // TODOOO send changed lang to extension 

        // init tracker
        const tracker = new Tracker(request.payload.userID)


        // send infos to backed
        let studyGroup = await tracker.trackEvent('survey', data)
        console.log(studyGroup)
        // set study group
        Storage.set('bfc:studyGroup', studyGroup)


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