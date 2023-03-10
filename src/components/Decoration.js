import { useQuery } from "@tanstack/react-query";
import { DotLoader } from "react-spinners";
import MoonLoader from "react-spinners/MoonLoader";
import { get_decoration_products, get_fragrance_products, get_groceries_products } from "../api_endpoints/get_requests/Endpoints";
import Product_details from "./Product-details";

const Decoration = () => {
    const {data, status} = useQuery({
        queryKey: ['decoration_products'],
        queryFn: get_decoration_products,
        staleTime: (1000 * 60) * 3
    })
    return ( 
        <div>
            <h2>Decoration</h2>
            {status == "loading" ?  <div className = "loader"> <MoonLoader /> </div>  : null}
            <ul className = "products">
                {status == "success" && data.products.map((value,index) => {
                    return <Product_details key = {index} product = {value}/>
                })}
            </ul>
        </div>
     );
}
 
export default Decoration;