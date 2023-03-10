import { Link } from "react-router-dom";
import logo from "../images/Online Shopping_Isometric.svg"
const Home = () => {
    return ( 
        <div className="homepage">
            <ul>
                <li>
                    <img src = {logo} style = {{width: "100%", height: "100%"}}/>
                </li>
                <li>
                    <h1 style = {{ fontWeight: "bold" }}>POCKETS DRY</h1>
                    <h2 className="price" style = {{color: "#fff"}}>A seamless online shopping experience</h2>
                    <Link to = "/products/phone"> <button className="home_btn">Shop Now!</button> </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Home;