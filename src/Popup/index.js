
import { h } from 'preact';
import {useState, useEffect} from 'preact/hooks'
import './popup.scss';
import Storage from './storage'


const Settings = ({goBack}) => {

    const [country, setCountry] = useState(false);

    useEffect(() => {
        if(!country)
            return
        Storage.set({country})
    },[country])

    useEffect(() => {
        (async ()=>{
            setCountry(await Storage.get('country'))
        })()
    }, [])

    return (
        <div class="page">
            <a href="#" onClick={e => goBack('home')} class="has-text-dark is-size-6 settings">Back</a>
            <h2 class="title is-size-3">Settings</h2>
            <div class="field">
                <label class="label">Country</label>
                <div class="control">
                    <div class="select">
                    <select value={country} onChange={e => setCountry(e.target.value)}>
                        <option value="de">Deutchland</option>
                        <option value="ch">Schweiz</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Popup = () => {

    useEffect(()=>{
        // generate user id if not defined
        (async()=>{
            if(!await Storage.get('userID')){
                Storage.set({
                    userID: 'test'
                })
            }
        })()
    },[])
    const startStudy = e => {
        e.preventDefault();

        chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {payload: {
                action:'startSurvey',
                lang: await Storage.get('country'),
                userID: await Storage.get('userID')
            }});
        });

    }

    const [page, setPage] = useState('home')

    return (
        <div id="popup">
            {page == 'home' && (
                <div class="page">
                    <h1 class="title">Better Food Choices</h1>
                    <h2 class="subtitle">Study</h2>
                    <a href="#" onClick={e => setPage('settings')} class="has-text-dark is-size-6 settings">Settings</a>
                    <button class="button is-primary" onClick={startStudy}>Start study</button>
                </div> 
            )}
            {page == 'settings' && <Settings goBack={setPage} />}
            
        </div>
    )
    
}



export default Popup;
