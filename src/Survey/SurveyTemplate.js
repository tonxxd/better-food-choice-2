import {h} from 'preact';
import './survey.scss';
import { useState } from 'preact/hooks';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import posed, { PoseGroup } from 'react-pose';
import {object, number, string} from 'yup';
import {useEffect} from 'preact/hooks'
import BetterFoodChoice from '../BetterChoices/App';

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
                <label className="radioInput">
                    <input type="radio" className="radioInputStyled" value={index} checked={value === index} onChange={e => setFieldValue(name, index)} />
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

    useEffect(() => {
        setShowModal(true)
    }, [])

    const questions = {
        ch: [
            {
                t:'Wie alt sind Sie?',
                name:'age',
                placeholder: 'E.g. 30'
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
                t:'User ID',
                name:'studyUserID',
                placeholder: ''
            }
        ],
        de: [
            {
                t:'Wie alt sind Sie?',
                name:'age',
                placeholder: 'E.g. 30'
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
                t:'User ID',
                name:'studyUserID',
                placeholder: ''
            }
        ]
    }
        
    

    


    return (
        <Modal className="modal" pose={showModal ? 'show' :'hide'}>
            <div className="modalInner">
                <Formik 
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);

                        
                        setShowModal(false)

                        BetterFoodChoice.showTaskDesc(()=>{
                            // send data to main handler
                            props.callback({
                                ...values,
                                country
                            });
                        })
                    }}
                    // validate data
                    validationSchema={object({
                        age: number()
                            .max(100,'Older than 100?')
                            .min(18, 'Must be 18 years old')
                            .required('Required'),
                        education: number().typeError('Required').integer().required('Required'),
                        income: number().typeError('Required').integer().required('Required'),
                        genre: number().typeError('Required').integer().required('Required'),
                        studyUserID:  string().required('Required'),
                      })}
                      //initialValues={{genre:false,age:'',education:false,income:false}}
                      initialValues={{genre:false,age:'',education:false,income:false, studyUserID:''}}

                >{({setFieldValue, values, errors, isSubmitting }) => 
                    <Form>
                        <PoseGroup>
                            {step == 0 && <Step key={0} className="intro">
                                <div className="right">
                                    <h1>Welcome to the study</h1>
                                    <p>Liebe Teilnehmerin, lieber Teilnehmer,<br></br>vielen Dank, dass Sie an dieser Studie teilnehmen. Unser Ziel ist es zu untersuchen, wie Menschen Lebensmittel online einkaufen. Zu diesem Zweck werden Sie später eine Einkaufsliste mit verschiedenen Produkten erhalten, die Sie in einem Online-Supermarkt bestellen sollen. Die Studie besteht aus insgesamt drei Teilen. Im ersten Teil werden Sie gebeten einen kurzen Fragebogen zu Ihrer Person und Ihrer Lebenssituation auszufüllen. Darauf folgt die Online-Shopping Aufgabe. Im letzten Teil folgt wieder ein Fragebogen zu Ihrer Person. </p> 
                                    <p>Für Ihre Teilnahme an der Studie erhalten Sie eine Vergütung in Höhe von xx€/CHF. Eine zusätzliche Vergütung erhalten Sie basierend auf den Entscheidungen, die Sie im Verlauf der Studie treffen. Hierzu werden zwei zufällige Produkte, die Sie im Verlauf der Studie in Ihren Warenkorb gelegt haben, ausgewählt. Sie erhalten entweder diese Produkte am Ende der Studie als zusätzliche Vergütung oder den monetären Gegenwert der Produkte. </p>
            
                                    <p>Wir werden all Ihre Antworten vertraulich und anonym erfassen. Anhand Ihrer Antworten werden keine Rückschlüsse auf Ihre Person möglich sein. </p>
            
                                    <p>Falls Sie ihre Daten nach Beendigung der Studie zurückziehen möchten, kontaktieren Sie bitte:<br></br>ID Labs ETH/HSG,<br></br>Weinbergstrasse 56, 8092 Zürich, team@autoidlabs.ch</p>
            
                                    <p>Nochmals vielen Dank!</p>
                                    <p>Klaus Fuchs (Projektleitung)<br></br>Prof. Dr. Verena Tiefenbeck<br></br>Jie Lian<br></br>Leonard Michels<br></br>Mehdi Bouguerra</p>
                                    <FieldOptions name={'country'} options={['Germany','Switzerland']} setFieldValue={(e,i) => setCountry(['de','ch'][i])} value={['de','ch'].indexOf(country)}/>                                    
                                    <a className={'next'} onClick={e => setStep(s => s+1)}>Next</a>
                                </div>
                            
                            </Step>}
                            {step == 1 && <Step  key={1} className={'step'}>
                                <h1>Intro Survey</h1>
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