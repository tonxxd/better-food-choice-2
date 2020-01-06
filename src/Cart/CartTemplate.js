import {h} from 'preact';
import posed from 'react-pose';
import { useState, useEffect } from 'preact/hooks';
import './cart.scss';
import {CartIcon, CloseIcon} from './icons';


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
                    <p>{p.name}<br></br><span>{p.price}</span></p>
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
    const [products, setProducts] = useState(localStorage.getItem("bfc:cart") ? JSON.parse(localStorage.getItem("bfc:cart")) : [])
    const [showNoti, setShowNoti] = useState('hide')
    useEffect(() => {
       

        if(products.length > props.products.length){
            setMessage("Product Removed!")
            setShowNoti('show')
        }


        if(products.length < props.products.length){
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
    const [products, setProducts] = useState(localStorage.getItem("bfc:cart") ? JSON.parse(localStorage.getItem("bfc:cart")) : [])
    const [showCartList, setShowCartList] = useState(false)

    const removeProduct = (gtin) => {
        setProducts(p => p.filter(i => i.gtin !== gtin))
    }

    // on init set actions for global object
    useEffect(() => {
        props.cartClass.addProduct = (p) => {
            props.cartClass.onAddToCart(p)
            setProducts(ps => [...ps, p])
        };
        props.cartClass.removeProduct = (gtin) => {
            props.cartClass.onRemoveFromCart(gtin)
            removeProduct(gtin)
        }
    }, [])

    // update cart in local storage
    useEffect(()=>{
        console.log("update memory")
        localStorage.setItem("bfc:cart", JSON.stringify(products))
    },[products])

    return [
        <Notification products={products} />,
        <CartButton count={products.length} setShowCartList={setShowCartList}/>,
        <CartList products={products} onFinishStudy={() => props.cartClass.onFinishStudy(products)} showCartList={showCartList} setShowCartList={setShowCartList} removeProduct={removeProduct}/>
    ]

}

export default CartTemplate