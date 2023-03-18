import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Link, Navigate, Router, useNavigate } from "react-router-dom";
import { get_product_category } from "../api_endpoints/get_requests/Endpoints";
import { CartContext } from "../contexts/CartContext";
import { auth } from "../utils/firebase";

const Navbar = () => {
    const { data, status} = useQuery({
        queryKey: ['get_product_category'],
        queryFn: get_product_category
    })
    const navigate = useNavigate();
    const { cart, toggle_cart } = useContext(CartContext);
    const [user, loading] = useAuthState(auth);
    const links = [
                    "phone",
                    "laptop",
                    "fragrance",
                    "skincare",
                    "groceries",
                    "decoration",
                    "furniture",
                    "tops",
                    "outfit_female",
                    "shoe_female",
                    "outfit_male",
                    "shoe_male",
                    "watch_male",
                    "watch_female",
                    "bag_female",
                    "jewellery",
                    "sunglass",
                    "automotive",
                    "motorcycle",
                    "lighting"
                ];
    return ( 
        <nav>
            <ul>
                <i className = "fa-solid fa-hand-holding-dollar fa-3x"></i> &nbsp;&nbsp;
                <h1 style = {{fontSize: "2rem"}}>Pockets Dry</h1>
            </ul>
            <ul>
                {/* <li className="search_icon"> <input type = "" placeholder = "Search Product" /> </li> */}
                {/* <li className="search_tag nav_icon"> <i className = "fa fa-search"></i> </li> */}
                <li className="grid_icon nav_icon"> <i className="fa-solid fa-bars"></i>
                    <ul>
                        {status == "success" && data.map((value,index) => {
                            return (
                                    <Link key = {index} to ={"/products/" + links[index]}> 
                                        <li>{value}</li> 
                                    </Link>
                                )
                        })}
                    </ul>
                </li>
                <li className="shopping_card nav_icon" onClick={() => {
                    toggle_cart();
                }}> 
                    <i className = "fa fa-shopping-cart"></i> 
                    <span className="cart_count">{cart.length}</span>
                </li>
                {user && <li onClick={() => {
                        auth.signOut();
                        navigate("/");
                    }
                } style = {{cursor: "pointer"}}><h2>Logout</h2></li>}
            </ul>
            {user && <h3>Welcome {user?.email}</h3>}
        </nav>
     );
}
 
export default Navbar;