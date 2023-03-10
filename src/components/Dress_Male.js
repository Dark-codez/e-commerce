import { useQuery } from "@tanstack/react-query";
import { DotLoader } from "react-spinners";
import MoonLoader from "react-spinners/MoonLoader";
import { get_mens_shirts_products } from "../api_endpoints/get_requests/Endpoints";
import Product_details from "./Product-details";

const Dress_Male = () => {
    const {data, status} = useQuery({
        queryKey: ['mens_dress_products'],
        queryFn: get_mens_shirts_products,
        staleTime: (1000 * 60) * 3
    })
    return ( 
        <div>
            <h2>Male Dress</h2>
            {status == "loading" ?  <div className = "loader"> <MoonLoader /> </div>  : null}
            <ul className = "products">
                {status == "success" && data.products.map((value,index) => {
                    return <Product_details key = {index} product = {value}/>
                })}
            </ul>
        </div>
     );
}
 
export default Dress_Male;