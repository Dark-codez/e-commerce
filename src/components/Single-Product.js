import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { get_single_product } from "../api_endpoints/get_requests/Endpoints";
import MoonLoader from "react-spinners/MoonLoader";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Single_Product = (prop) => {
    const { id } = useParams();
    const { status, data } = useQuery({
        queryKey: ["single_product", id],
        queryFn: get_single_product,
        staleTime: (1000 * 60) * 1
    });
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(1);
    const { add_to_cart, cart } = useContext(CartContext);
    return (  
        <>
        <h2 className = "price" onClick={() => {
            navigate(-1);
        }} style = {{letterSpacing: "initial" ,cursor: "pointer", display: "inline-block", border: "4px solid #fff", color: "#fff",padding: "10px 40px"}}> Go Back <i className="fa fa-arrow-left"></i> </h2>

        <h2 className = "price" style = {
            {
                letterSpacing: "initial", 
                marginTop: "1em", 
                color: "#fff",
            }}>A better view of the product</h2>

        {status === "loading" ?  <div className = "loader"> <MoonLoader /> </div> : null}
            <ul className = "products">
                {status === "error" && <h3>Error Fetching Data</h3>}
                {status === "success" && (
                    <li className = "single_details">
                    <h2 className = 'title price' style = {{
                        color: "#fff"
                    }} >{data.title}</h2>
                        <div className="product_extra_pics">
                            {data.images.map((value,index) => {
                                return (
                                    <div key = {index}>
                                        <img loading = "lazy" src = {value}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="product_info">
                            <h3>Stock: {data.stock}</h3>
                            <h2 className="price" style = {{color: "#f00"}}>Price: <span className = 'price'>${data.price}</span></h2>
                            <h3>Discount Percentage: <span style = {{color: "red"}}>{data.discountPercentage}% </span></h3>
                            <h3>Category: <span style = {{color: "#fff"}}> {data.category} </span> </h3>
                            <h3>Brand: <span style = {{color: "#fff"}}>{data.brand} </span> </h3>
                            {/* BUTTON FOR QUANTITY */}
                            <h3>Quantity: 
                                <button onClick = {() => setQuantity(prev => Math.max(1,prev - 1))} style = {{
                                            display: "inline", width: "50px", background: "none"
                                        }}>-</button> 
                                    <span style = {{color: "#f00"}}> { quantity } </span> 
                                <button onClick={() => setQuantity(prev => Math.min(10,prev + 1))} style = {{
                                        display: "inline", width: "50px", background: "none"
                                    }}>+</button> 
                            </h3>
                            <h3>Description: <span style = {{color: "#fff"}}> {data.description} </span> </h3>
                            {
                                cart.find(value => value.product_id == data.id) == undefined
                                ?
                                <button onClick={() => {
                                    add_to_cart({
                                        "title": data.title,
                                        "price": data.price,
                                        "product_id": data.id,
                                        "quantity": quantity,
                                        "category": data.category, 
                                    })
                                }}>Add to cart <i className="fa fa-shopping-cart"></i></button> 
                                :
                                <button className = "disabled" disabled = {true} style = {{
                                    background: "#000",
                                    color: "#fff"
                                }}> Item is already in cart</button>
                            }
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
}
 
export default Single_Product;