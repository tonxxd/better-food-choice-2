import {h} from 'preact';
import posed from 'react-pose';
import { useState, useEffect } from 'preact/hooks';
import './cart.scss';


const CartButton = props => {
    return (
        <div id="bfcCartButtonEl" onClick={ e => props.setShowCartList(true)}>
            {props.count}
        </div>
    )
}

const CartListWrapper = posed.div({
    show: {left: 0},
    hide: {left: '-100%'}
})
const CartList = props => {
    return (
        <CartListWrapper id="bfcCartList" pose={props.showCartList ? 'show' : 'hide'} initialPose="hide">
            <h1>Cart</h1>
            {props.products.map(p => (
                <div className="product">
                    {p.name}
                    <a href="#" onClick={e => {
                        e.preventDefault()
                        props.removeProduct(p.gtin)
                    }}>remove</a>
                </div>
            ))}
        </CartListWrapper>
    )
}

const CartTemplate = props => {

    const [products, setProducts] = useState([])
    const [showCartList, setShowCartList] = useState(false)

    const removeProduct = (gtin) => {
        setProducts(p => p.filter(i => i.gtin !== gtin))
    }

    useEffect(() => {
        props.cartClass.addProduct = (p) => setProducts(ps => [...ps, p]);
        props.cartClass.removeProduct = (gtin) => removeProduct(gtin)
    }, [])

    return [
        <CartButton count={products.length} setShowCartList={setShowCartList}/>,
        <CartList products={products} showCartList={showCartList} removeProduct={removeProduct}/>
    ]

}

export default CartTemplate