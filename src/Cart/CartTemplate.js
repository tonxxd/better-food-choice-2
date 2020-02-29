import {h} from 'preact';
import posed from 'react-pose';
import { useState, useEffect } from 'preact/hooks';
import './cart.scss';
import {CartIcon, CloseIcon} from './icons';
import Storage from '../utils/storage';
import { settings } from '../config';
import BetterFoodChoice from '../BetterChoices/App';
import {unit,multiply,json} from 'mathjs'
import { ToastContainer, toast } from 'react-toastify';


const CartButton = props => {
    console.log(props)
    return (
        <div id="bfcCartButtonEl" onClick={ e => props.setShowCartList(true)}>
            <span className="badge">{props.count}</span>
            <CartIcon color={'white'} />
        </div>
    )
}

const TaskButton = props => {
    return (
        <div id="bfcCartButtonEl" className="taskPopup" onClick={ e => {
            BetterFoodChoice.showTaskDesc(0, ()=>{

                BetterFoodChoice.showTaskDesc(1, ()=>{
                    BetterFoodChoice.showTaskDesc(2, ()=>{
                    
                    })
                })
                
            })
        }}>
            ?
        </div>
    )
}

const CartListWrapper = posed.div({
    show: {right: 0},
    hide: {right: '-100%'}
})
const CartList = props => {

    const [group, setGroup] = useState('C')
    const [country, setCountry] = useState('ch')

    useEffect(()=> {(async()=>{
        setGroup(await Storage.get("bfc:studyGroup"))
        setCountry(await Storage.get("bfc:country"))
    })()}, [])

    const total = Math.round(props.products.reduce((sum, a)=> sum+(parseFloat(a.price) *(a.quantity||1)), 0)*100)/100;

    return (
        <CartListWrapper id="bfcCartList" pose={props.showCartList ? 'show' : 'hide'} initialPose="hide">
            <span className="closeSide" onClick={e => props.setShowCartList(false)} ><CloseIcon color={"rgba(0,0,0,.3)"} /></span>
            <h1>Warenkorb</h1>
            <div className="cartInner">
                {props.products.map(p => (
                    <div className="product">
                        <div className="img" style={{background: `url(${p.img})`}} />
                        <p>
                        {p.quantity > 1 ? p.quantity+' x':''}{p.name}
                            <span>{p.currency.toUpperCase()} {p.price}</span>
                            <span>{p.size ? multiply(p.size,p.quantity||1).format({precision:3}):''}</span>
                            {((group === 'A') || (group == 'B' && ['C','D','E'].indexOf(p.nutriScore) === -1)) && <img src={chrome.runtime.getURL(`ns${p.nutriScore}.png`)} />}
                        </p>
                        <a href="#" style={{color:'white'}} onClick={e => {
                            e.preventDefault()
                            props.removeProduct(p.gtin)
                        }}>-</a>
                    </div>
                ))}
                {props.products.length === 0 && <p>Noch keine Produkte</p>}
            </div>
            <div className="listFooter">
                <div className="innerFooter">
                <p className="tot">Summe: <span style={{display:'block'}}>{country == 'ch' ? 'CHF' : '€'} {total.toFixed(2)}</span></p>
                <button className="button" onClick={e => {
                    // return if over budget
                    if(total > settings.maxBudget[country]){
                        toast.warn(`Budget überschritten! (max: ${country == 'ch' ? 'CHF' : '€'}${settings.maxBudget[country]})`);
                        return
                    }
                    BetterFoodChoice.showAlert("Einkauf beenden","Sind Sie sicher, dassS ie Ihren Einkauf erledigt haben?", ()=>{
                        
                    }, 'Nein', ()=>{
                        props.setShowCartList(false)
                        setTimeout(props.onFinishStudy, 800)
                    }, 'Ja')
                    
                }}>Zur Kasse</button>
                </div>
                <div>Budget: {country == 'ch' ? 'CHF' : '€'}{settings.maxBudget[country]}</div>
            </div>
        </CartListWrapper>
    )
}



const CartTemplate = props => {


    // restore cart or []
    const [products, setProducts] = useState([])
    const [init, setInit] = useState(false)
    const [showCartList, setShowCartList] = useState(false)

    const removeProduct = (gtin) => {
        // quantity feature
        
            setProducts(ps => {
                const p = ps.filter(p => p.gtin === gtin)[0];
                if(p.quantity && p.quantity > 1){
                    return ps.map(pold => pold.gtin === gtin ? {...pold, quantity: (pold.quantity || 1)-1} : pold)
                }else {
                    return ps.filter(i => i.gtin !== gtin)
                }
            })
         
    }

    // on init set actions for global object
    useEffect(() => {
        
        (async()=>{
            const localStorageCart = await Storage.get("bfc:cart");
            console.log(localStorageCart)
            console.log(localStorageCart ? JSON.parse(localStorageCart, json.reviver) : '')
            setProducts(localStorageCart ? JSON.parse(localStorageCart, json.reviver).map(p => p.quantity ? {...p, quantity: parseFloat(p.quantity)}:p) : [])
            setInit(true)
            props.cartClass.addProduct = (p) => {

                // toast 
                toast.success('Produkt hinzugefügt!')
                props.cartClass.onAddToCart(p)


                // quantity feature
                setProducts(ps => {
                        if(ps.filter(pold => pold.gtin === p.gtin).length){
                            return ps.map(pold => pold.gtin === p.gtin ? {...pold, quantity: (pold.quantity || 1) +1} : pold)
                        }else {
                            return [...ps, p]
                        }
                })

                
            };
            props.cartClass.removeProduct = (gtin) => {
                props.cartClass.onRemoveFromCart(gtin);
                toast.success('Produkt entfernt!')
                removeProduct(gtin)
            }
        })()
        
    }, [])

    // update cart in local storage
    useEffect(()=>{
        if(!init) // prevent override empty cart
            return
        Storage.set("bfc:cart", JSON.stringify(products))
    },[products])

    return [
        <TaskButton />,
        <ToastContainer position={toast.POSITION.TOP_CENTER} />,
        <CartButton count={products.reduce((sum ,p) => sum+(parseFloat(p.quantity || 1)), 0)} setShowCartList={setShowCartList}/>,
        <CartList products={products} onFinishStudy={() => props.cartClass.onFinishStudy(products.map(p => p.size ? {...p,size: multiply(p.size, p.quantity||1).format({precision:3})} : p))} showCartList={showCartList} setShowCartList={setShowCartList} removeProduct={removeProduct}/>
    ]

}

export default CartTemplate