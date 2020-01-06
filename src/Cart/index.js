import { h, render } from "preact";
import $ from 'jquery'
import CartTemplate from "./CartTemplate";

class Cart {

    render(){
        const el = document.createElement("div");
        el.id = "bfcCart";
        render(<CartTemplate cartClass={this} />, el)
        document.body.appendChild(el);
    }
}

export default Cart