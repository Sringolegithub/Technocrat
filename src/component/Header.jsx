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
                        <i className="fa fa-times" onClick="closemenu()"></i>

                        <li><Link to="/about">ABOUT US </Link><span><b>+</b></span></li>

                        <li><Link to="/expertise">EXPERTISE</Link><span><b>+</b></span></li>
                        <li><Link to="/solutions">SOLUTIONS</Link><span><b>+</b></span></li>
                        <li><Link to="/tontactUs">CONTACT US</Link><span><b>+</b></span></li>
                        <li><Link to="/joinUs">JOIN US</Link><span><b>+</b></span></li>

                    </ul>
                    <i className="fa fa-bars" onClick="openmenu()"></i>
                </nav>
            </div>
            {/* <div className="container-2">
                <div className="container-col-2">
                    <p>We make dreams career happen</p>
                    <p>We make great team happen</p>
                    <h1>We Make it happen</h1>

                </div>

            </div> */}
        </div>

        </>
    );
};
export default Header;