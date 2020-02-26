
import { h } from 'preact';
import {useState, useEffect} from 'preact/hooks'
import './popup.scss';
import Storage from '../utils/storage'
import shortid from 'shortid';



const Settings = ({goBack}) => {

    const [country, setCountry] = useState(false);

    useEffect(() => {
        if(!country)
            return
        Storage.set('bfc:country', country)
    },[country])

    useEffect(() => {
        (async ()=>{
            setCountry(await Storage.get('bfc:country'))
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


    const [studyStatus, setStudyStatus] = useState(0)

    useEffect(()=>{
        // generate user id if not defined
        (async()=>{



            if(!await Storage.get('bfc:userID')){
                Storage.set({
                    'bfc:userID': shortid.generate(),
                    'bfc:country': 'de',
                })
            }


            // ask for updated study status from content script
            setStudyStatus(parseInt(await Storage.get('bfc:studyStatus')) || 0)

        })()
    },[])


    const startStudy = async e => {
        e.preventDefault();

        // prevent if wrong website TODOOOO

        // update state
        setStudyStatus(1);
        await Storage.set('bfc:studyStatus',1),

        chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {            
            chrome.tabs.sendMessage(tabs[0].id, {payload: {
                action:'bfc:startSurvey',
                lang: await Storage.get('bfc:country'),
                userID: await Storage.get('bfc:userID'),
                studyGroup: await Storage.get('bfc:studyGroup'),
            }});
        });

    }

    const [page, setPage] = useState('home')

    return (
        <div id="popup">
            {page == 'home' && (
                <div class="page">
                    <h1 class="title">Lebensmittelkauf im Online-Supermarkt</h1>
                    {/* <h2 class="subtitle">Study</h2> */}
                    {/* <a href="#" onClick={e => setPage('settings')} class="has-text-dark is-size-6 settings">Settings</a> */}
                    {studyStatus === 0 && <button class="button is-primary" onClick={startStudy}>Start study</button>}
                    {studyStatus === 1 && <p>Sie können mit dem Einkauf beginnen.</p>}
                    {studyStatus === 2 && <p>Study finished, thank you!</p>}
                </div> 
            )}
            {page == 'settings' && <Settings goBack={setPage} />}
            
        </div>
    )
    
}



export default Popup;
