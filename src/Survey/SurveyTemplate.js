import {h} from 'preact';
import './survey.scss';
import { useState, useRef } from 'preact/hooks';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import posed, { PoseGroup } from 'react-pose';
import {object, number, string} from 'yup';
import {useEffect} from 'preact/hooks'
import BetterFoodChoice from '../BetterChoices/App';
import Storage from '../utils/storage';
import Axios from 'axios';
import { API } from '../config';


const Step = posed.div({
    enter: {opacity:1},
    exit: {opacity:0}
})

const Modal = posed.div({
    show: {opacity:1,  applyAtStart: {display:'flex'}},
    hide: {opacity:0,  applyAtEnd: {display:'none'}}
})

const FieldOptions = ({name, options, setFieldValue, value}) => {
    return (
        <div className={'options'}>
            {options.map((o, index) => (
                <label className="radioInput" style={{cursor:'pointer'}}>
                    <input type="radio" className="radioInputStyled" value={o} checked={value === o} onChange={e => setFieldValue(name, o)} />
                    {o}
                </label>
            ))}
        </div>
    )
}

const Survey = (props) => {

    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [country, setCountry] = useState(props.country)

    const container = useRef(false)

    useEffect(() => {
        setShowModal(true);
        (async()=>{
            let {data:group} = await Axios.get(API.baseEndPoint+'/group');
            await Storage.set("bfc:studyGroup",group)
        })()
    }, [])

    const questions = {
        ch: [
            {
                t:'Wie alt sind Sie?',
                name:'age',
                placeholder: 'z.B. 30'
            },{
                t: 'Welches Geschlecht haben Sie?',
                options: ['Weiblich','Männlich','Divers'],
                name: 'genre'
            },
            {
                t:'Was ist Ihr höchster abgeschlossener oder erhaltener Bildungsabschluss?',
                options: ['Kein formeller Bildungsabschluss','Primarschule oder Sekundarschule (A, B und C)','Berufliche Grundbildung (eidg. Berufsattest oder Fähigkeitszeugnis mit Berufsmaturität)','Gymnasiale Maturität oder Fachmaturität','Eidg. Berufsprüfung oder höhere Fachprüfung','Bachelor','Master','Diplom','Promotion'],
                name: 'education'
            },{
                t:'Wie hoch ist das monatlich verfügbare Nettoeinkommen Ihres Haushalts?',
                name: 'income',
                options: ['0 – 999 Fr.','1000– 1999 Fr.','2000 – 2999 Fr.','3000 – 3999 Fr.','4000 – 4999 Fr.','5000 – 5999 Fr.','6000 – 6999 Fr.','>= 7000 Fr. ','Keine Angabe'],
            },
            {
                t:'User ID (siehe Beiblatt)',
                name:'studyUserID',
                placeholder: ''
            }
        ],
        de: [
            {
                t:'Wie alt sind Sie?',
                name:'age',
                placeholder: 'z.B. 30'
            },{
                t: 'Welches Geschlecht haben Sie?',
                options: ['Weiblich','Männlich','Divers'],
                name: 'genre'
            },{
                t:'Was ist Ihr höchster abgeschlossener oder erhaltener Bildungsabschluss?',
                options: ['Kein formeller Bildungsabschluss','Haupt-(Volks-)schulabschluss','Mittlere Reife','Fachhochschulreife','Allg. Hochschulreife','Lehre/Berufsausbildung','Bachelor','Master','Diplom','Promotion'],
                name: 'education'
            }, {
                t:'Wie hoch ist das monatlich verfügbare Nettoeinkommen Ihres Haushalts?',
                name:'income',
                options: ['0 – 499 €','500 – 999€','1000 – 1999 €','2000 – 2999 €','3000 – 3999 €','4000 – 4999 €','5000 – 5999 €','>= 6000 €','Keine Angabe']
            },
            {
                t:'User ID (siehe Beiblatt)',
                name:'studyUserID',
                placeholder: ''
            }
        ]
    }
        
    

    


    return (
        <Modal className="modal" pose={showModal ? 'show' :'hide'}>
            <div className="modalInner" ref={container}>
                <Formik 
                    onSubmit = {
                        async (values, {
                            setSubmitting
                        }) => {
                            setSubmitting(false);


                            // set country and group
                            await Storage.set('bfc:country', country)


                            setShowModal(false)

                            BetterFoodChoice.showTaskDesc(0, () => {

                                BetterFoodChoice.showTaskDesc(1, () => {
                                    BetterFoodChoice.showTaskDesc(2, () => {
                                        // send data to main handler
                                        props.callback({
                                            ...values,
                                            country
                                        });
                                    })

                                })

                            })
                        }
                    }
                    // validate data
                    validationSchema={object({
                        age: number()
                            .max(100,'Older than 100?')
                            .min(18, 'Must be 18 years old')
                            .required('Required'),
                        education: string().typeError('Required').required('Required'),
                        income: string().typeError('Required').required('Required'),
                        genre: string().typeError('Required').required('Required'),
                        studyUserID:  string().required('Required'),
                      })}
                      //initialValues={{genre:false,age:'',education:false,income:false}}
                      initialValues={{genre:false,age:'',education:false,income:false, studyUserID:''}}

                >{({setFieldValue, values, errors, isSubmitting }) => 
                    <Form>
                        <PoseGroup>
                            {step == 0 && <Step key={0} className="intro">
                                <div className="right">
                                    <h1>Willkommen zur Studie</h1>
                                    <p>Liebe Teilnehmerin, lieber Teilnehmer,</p>

                                    <p>vielen Dank, dass Sie an dieser Studie teilnehmen. Unser Ziel ist es zu untersuchen, wie Menschen Lebensmittel online einkaufen. Zu diesem Zweck sollen Sie später Lebensmittel in einem Online-Supermarkt einkaufen. </p>
                                    <p>Die Studie besteht aus insgesamt drei Teilen. Im ersten Teil werden Sie gebeten einen kurzen Fragebogen zu Ihrer Person und Ihrer Lebenssituation auszufüllen. Darauf folgt die Online-Shopping Aufgabe. Im letzten Teil folgt wieder ein Fragebogen zu Ihrer Person.  </p>
                                     
                                    <p>Für Ihre Teilnahme an der Studie erhalten Sie eine Vergütung in Höhe von 10€ / 20CHF. Zusätzlich werden am Ende der Erhebung aus allen Teilnehmenden zufällig drei ausgewählt, die ihren in der Aufgabe zusammengestellten Warenkorb als zusätzliche Vergütung erhalten. Um an der Verlosung teilzunehmen, geben Sie bitte am Ende des finalen Fragebogens ihre ID (siehe Beiblatt) und E-Mail-Adresse an. Diese werden separat von ihren Antworten gespeichert, sodass die Anonymität Ihrer Antworten gewährleistet bleibt.</p>
                                     
                                    <p>Wir werden all Ihre Antworten vertraulich und anonym erfassen. Anhand Ihrer Antworten werden keine Rückschlüsse auf Ihre Person möglich sein. </p>
                                     
                                    <p>Falls Sie ihre Daten nach Beendigung der Studie zurückziehen möchten, kontaktieren Sie bitte:<br/>
                                    Auto-ID Labs ETH / HSG,<br/>
                                    Weinbergstrasse 56, 8092 Zürich, team@autoidlabs.ch</p>
                                     
                                    <p>Nochmals vielen Dank!</p>
                                    
                                    <p>Klaus Fuchs (Projektleitung)<br/>
                                    Prof. Dr. Verena Tiefenbeck<br/>
                                    Jie Lian<br/>
                                    Leonard Michels<br/>
                                    Enrico Toniato</p>

                                    <FieldOptions name={'country'} options={['Deutschland','Schweiz']} setFieldValue={(e,i) => setCountry(i == 'Deutschland' ? 'de':'ch')} value={country == 'de' ? 'Deutschland':'Schweiz'}/>                                    
                                    <a className={'next'} onClick={e => {
                                        container.current.scrollTo(0,0)
                                        setStep(s => s+1)
                                    }}>Weiter</a>
                                </div>
                            
                            </Step>}
                            {step == 1 && <Step  key={1} className={'step'}>
                                <h1>Einleitung</h1>
                                {
                                    questions[country].map(q => (
                                        <div className="question">
                                            <h2>{q.t}</h2>
                                            {q.options ? <FieldOptions name={q.name} options={q.options} setFieldValue={setFieldValue} value={values[q.name]}/> : <Field placeholder={q.placeholder} className={'input'} type="text" name={q.name}/>}
                                            <ErrorMessage className="error" name={q.name} component="div" />
                                        </div>
                                    ))
                                }
                                {Object.keys(errors).length > 0 && <div className="error">Please check answers</div>}
                                <input type="submit" className={'next'} value="Start"/>
                            </Step>}
                        </PoseGroup>
                    </Form>
                }</Formik>
            </div>
        </Modal>
    )
}



export default Survey;