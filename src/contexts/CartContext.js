import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider = (props) => {
    const [cart,setCart] = useState([]);
    const [openCart,setOpenCart] = useState(false);

    const add_to_cart = (data) => {
        setCart([...cart,data]);
    }

    const toggle_cart = () => {
        setOpenCart(prev => !prev)
    }

    const delete_from_cart = (id) => {
        console.log(id);
        setCart(cart.filter(data => {
            return data.product_id !== id 
        }) );
    }
 
    console.log("This is cart data",cart);
    return (
        <CartContext.Provider value = {{ cart, add_to_cart, openCart, toggle_cart, delete_from_cart }}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;