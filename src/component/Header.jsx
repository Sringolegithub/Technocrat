import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <>
         {/* <!-- ---------------header contain--------------- --> */}
        <div className="header">
            <div className="conatiner">
                <nav>
                    <Link to="index.html">
                        <img src="/Assets/images/logo.jpg" width="70px" height="70px" to="/index.html"/>
                    </Link>
                    <h1> TECHNOCRAT</h1>
                    <ul id="sidemenu">
                        <i className="fa fa-times" onClick="closemenu()"></i>

                        <li><Link to="/about">ABOUT US </Link><span><b>+</b></span></li>
                        <li><Link to="Eepertise.html">EXPERTISE</Link><span><b>+</b></span></li>
                        <li><Link to="Solutions.html">SOLUTIONS</Link><span><b>+</b></span></li>
                        <li><Link to="Thought-Center.html">THOUGHT CENTER</Link><span><b>+</b></span></li>
                        <li><Link to="ContactUs.html">CONTACT US</Link><span><b>+</b></span></li>
                        <li><Link to="JoinUs.html">JOIN US</Link><span><b>+</b></span></li>
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