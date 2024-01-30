const Footer = () => {
    return ( 
        <footer>
            <ul className="footer">
                <li>
                    <h1>About us</h1>
                    <p>We make your shopping experience as seamless as possible :)</p>
                </li>
                <li>
                    <h1>Contact us</h1>
                    <p>Whatsapp: 08080655081</p>
                    <p>Facebook: Rebecca Philip</p>
                    <p>Email: random@gmail.com</p>
                </li>
                <li>
                    <h1>Links</h1>
                    <p>We make your shopping experience as seamless as possible :)</p>
                </li>
                <li>
                    <h1>News Letter</h1>
                    <p>We make your shopping experience as seamless as possible :)</p>
                    <input style = {{
                            width: "100%",
                            padding: "10px 20px",
                            border: "none",
                            outline: "none",
                            background: "#eef"
                        }} 
                        type = "email" 
                        placeholder = "Email Address"
                        />
                </li>
                <h1 style = {{textDecorationLine: "none", textDecorationStyle: "none"}}> 
                    &copy;2023 All Rights Reserved 
                </h1>
            </ul>
        </footer>
     );
}
 
export default Footer;
