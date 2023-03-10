import { Link } from "react-router-dom";

const Product_details = (props) => {
    return ( 
        <li className="product_information">
            <h2 className = 'title price' style = {{color: "#fff"}}>{props.product.title}</h2>
            <img loading = "lazy" src = {props.product.thumbnail}/>
            <div className="product_info">
                <h3>Stock: {props.product.stock}</h3>
                <h2 className="price">Price: <span className = 'price' style = {{color: "#f00"}}>${props.product.price}</span></h2>
                <h3>Discount Percentage: <span style = {{color: "#ffe"}}>{props.product.discountPercentage}% </span></h3>
                <h3>Category: <span style = {{color: "#fff"}}> {props.product.category} </span> </h3>
                <h3>Brand: <span style = {{color: "#fff"}}>{props.product.brand} </span> </h3>
                <h3>Description: <span style = {{color: ""}}> {props.product.description} </span> </h3>
                <Link to = {"/product/" + props.product.id}> <button className="btn_view">View <i className="fa fa-eye"></i></button> </Link>
            </div>
        </li>
     );
}
 
export default Product_details;