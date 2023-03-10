import { useQuery } from "@tanstack/react-query";
import { DotLoader } from "react-spinners";
import MoonLoader from "react-spinners/MoonLoader";
import { get_skincare_products } from "../api_endpoints/get_requests/Endpoints";
import Product_details from "./Product-details";

const Skincare = () => {
    const {data, status} = useQuery({
        queryKey: ['skincare_products'],
        queryFn: get_skincare_products,
        staleTime: (1000 * 60) * 3
    })
    return ( 
        <div>
            <h2>Skin Products</h2>
            {status == "loading" ?  <div className = "loader"> <MoonLoader /> </div>  : null}
            <ul className = "products">
                {status == "success" && data.products.map((value,index) => {
                    return <Product_details key = {index} product = {value}/>
                })}
            </ul>
        </div>
     );
}
 
export default Skincare;