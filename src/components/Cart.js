import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
    const { openCart, cart, delete_from_cart } = useContext(CartContext);
    return ( 
        <div className= {openCart ? "cart__content" :"closed_cart"}>
            <h1 style = {{
                color: "#fff",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontSize: "clamp(18px,3vw,28px)"
            }}>Items In Cart</h1>
            <ul>
                {cart.length == 0 ? <h1 style = {{
                    color: "#fff",
                    fontSize: "clamp(20px,3.5vw,30px)"
                }}>
                    Empty : Add some things to your cart :)
                </h1> : null}

                {cart.map((value,index) => {
                    return (
                        <li className = "cart_items" key = {index}>
                            <h1>Item {index + 1}</h1>
                            <h3>Title: {value.title}</h3>
                            <h3>Price: ${value.price}</h3>
                            <h3>Category: {value.category}</h3>
                            <h3>Quantity: {value.quantity}</h3>
                            <button style = {{
                                background: "#fff",
                                color: "#000"
                            }} onClick = {() => {
                                delete_from_cart(value.product_id)
                            }}> Delete Item </button>
                        </li>
                    )
                })}
                {cart.length > 0 && (
                    <h1 style = {{color: "#fff", textDecorationLine: "underline", textDecorationStyle: "double"}}>
                        Total Price: ${cart.reduce((acc,val) => {
                            acc = acc + val.price;
                            return acc;
                        },0)}
                    </h1>
                )}
                {cart.length > 0 && <button style = {{background: "#000"}} onClick={() => alert("No backend Attached :)")}>Proceed to Checkout</button>}
            </ul>
        </div>
     );
}
 
export default Cart;