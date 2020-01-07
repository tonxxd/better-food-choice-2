
import { h, render } from 'preact';

import Popup from './Popup/index.js';
import Storage from './Popup/storage.js';

render(<Popup/>, document.getElementById('app'))


// update status when finished test
chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'bfc:studyFinish'){
        Storage.set({studyStatus:2})
    }
})
