import React from "react";
import { Link } from "react-router-dom";
import { openmenu } from "../Events";
import { closemenu } from "../Events";

const Header=()=>{
    
      
    return(
        <>
         {/* <!-- ---------------header contain--------------- --> */}
        <div className="header">
            <div className="conatiner">
                <nav>
                    <Link to="index.html">
                        <img src="/Assets/images/logo.jpg" width="70px" height="70px" to="/"/>
                    </Link>
                    <h1> TECHNOCRAT</h1>
                    <ul id="sidemenu">
                        <i className="fa fa-times" onClick={closemenu}></i>

                        <li><Link to="/about">ABOUT US </Link><span><b>+</b></span></li>

                        <li><Link to="/expertise">EXPERTISE</Link><span><b>+</b></span></li>
                        <li><Link to="Solutions.html">SOLUTIONS</Link><span><b>+</b></span></li>
                        <li><Link to="/thought-Center">THOUGHT CENTER</Link><span><b>+</b></span></li>
                        <li><Link to="/contact">CONTACT US</Link><span><b>+</b></span></li>
                        <li><Link to="JoinUs.html">JOIN US</Link><span><b>+</b></span></li>

                    </ul>
                    <i className="fa fa-bars" onClick={openmenu}></i>
                </nav>
            </div>
        </div>

        </>
    );
};
export default Header;