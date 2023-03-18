import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider(auth);
    const GoogleLogin = async () => {
        try{
            const response = await signInWithPopup(auth, googleProvider);
            console.log(response);
            navigate("/products/phone")
        }catch(err){
            console.log(err);
        }
    }
    return ( 
        <>
            <form className = "login">
                <h2>Join Today</h2>
                <h3>Sign in with one of the providers</h3>
                <button onClick={(e) => {
                    e.preventDefault();
                    GoogleLogin();
                }}><i className = "fa fa-social-google" /> Continue with google</button>
            </form>        
        </>
     );
}
 
export default Login;