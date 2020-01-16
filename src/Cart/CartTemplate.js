import {h} from 'preact';
import posed from 'react-pose';
import { useState, useEffect } from 'preact/hooks';
import './cart.scss';
import {CartIcon, CloseIcon} from './icons';
import Storage from '../utils/storage';


const CartButton = props => {
    return (
        <div id="bfcCartButtonEl" onClick={ e => props.setShowCartList(true)}>
            <span className="badge">{props.count}</span>
            <CartIcon color={'white'} />
        </div>
    )
}

const CartListWrapper = posed.div({
    show: {left: 0},
    hide: {left: '-100%'}
})
const CartList = props => {
    console.log(props.products)
    return (
        <CartListWrapper id="bfcCartList" pose={props.showCartList ? 'show' : 'hide'} initialPose="hide">
            <span className="closeSide" onClick={e => props.setShowCartList(false)} ><CloseIcon color={"rgba(0,0,0,.3)"} /></span>
            <h1>Cart</h1>
            {props.products.map(p => (
                <div className="product">
                    <div className="img" style={{background: `url(${p.img})`}} />
                    <p>{p.name} <span>x{p.quantity || 1}</span><br></br><span>{p.price}</span></p>
                    <a href="#" onClick={e => {
                        e.preventDefault()
                        props.removeProduct(p.gtin)
                    }}><CloseIcon  color={"white"}/></a>
                </div>
            ))}
            {props.products.length === 0 && <p>No products yet</p>}
            <div className="listFooter">
                <p className="tot">Tot: <span>{Math.round(props.products.reduce((sum, a)=> sum+parseFloat(a.price), 0)*100)/100}</span></p>
                <button className="button" onClick={e => {
                    props.setShowCartList(false)
                    setTimeout(props.onFinishStudy, 800)
                }}>Finish study</button>
            </div>
        </CartListWrapper>
    )
}


const NotificationEl = posed.div({
    hide: {opacity: 0, top: '-100%'},
    show: {opacity:1, top:0}
})
const Notification = props => {

    const [message, setMessage] = useState('Product Added!')
    const [products, setProducts] = useState([])
    const [showNoti, setShowNoti] = useState('hide')
   
    // set default products
    useEffect(()=>{
       (async()=>{
           setProducts(await Storage.get("bfc:cart") ? JSON.parse(await Storage.get("bfc:cart")) : [])
       })()
    },[])
   
    useEffect(() => {
       
        const currentAmount = products.length*products.reduce((sum ,p) => sum+p.quantity || 1, 0);
        const newAmount = props.products.length*props.products.reduce((sum ,p) => sum+p.quantity || 1, 0)

        if( currentAmount> newAmount){
            setMessage("Product Removed!")
            setShowNoti('show')
        }


        if(currentAmount < newAmount){
            setMessage("Product Added!")
            setShowNoti('show')
        }
        setProducts(props.products)

        setTimeout(() => {
            setShowNoti('hide')
        }, 2000)

    }, [props.products])
    return (
        <NotificationEl id="bfcNotification" pose={showNoti} initialPose="hide">
            {message}
        </NotificationEl>
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
            setProducts(await Storage.get("bfc:cart") ? JSON.parse(await Storage.get("bfc:cart")) : [])
            setInit(true)
            props.cartClass.addProduct = (p) => {
                props.cartClass.onAddToCart(p)


                // quantity feature
                setProducts(ps => {
                        console.log("ACTUAL CART",ps)
                        if(ps.filter(pold => pold.gtin === p.gtin).length){
                            return ps.map(pold => pold.gtin === p.gtin ? {...pold, quantity: (pold.quantity || 1) +1} : pold)
                        }else {
                            return [...ps, p]
                        }
                })

                
            };
            props.cartClass.removeProduct = (gtin) => {
                props.cartClass.onRemoveFromCart(gtin);
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
        <Notification products={products} />,
        <CartButton count={products.length*products.reduce((sum ,p) => sum+p.quantity || 1, 0)} setShowCartList={setShowCartList}/>,
        <CartList products={products} onFinishStudy={() => props.cartClass.onFinishStudy(products)} showCartList={showCartList} setShowCartList={setShowCartList} removeProduct={removeProduct}/>
    ]

}

export default CartTemplate