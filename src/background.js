
// listen for extension button click to open main settings modal

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {Notice: "The button was clicked"}, ()=>{});
  });
})

