import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Openmenu } from "../Events";
import { Closemenu } from "../Events";

const Header=()=>{
<<<<<<< HEAD
    
      
=======
    const  [style,setstyle] = useState({display:"none"}); 
    const closeMenu = ()=>{
        setstyle({display:"none"});
    }

    const openMenu = () =>{
        setstyle({});
    }
>>>>>>> 07163d1cd353486a761ee0b60fb469b088ebced4
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
                    <ul id="" style={style}>
                        <i className="fa fa-times" onClick={closeMenu}></i>

                        <li><Link to="/about">ABOUT US </Link><span><b>+</b></span></li>

                        <li><Link to="/expertise">EXPERTISE</Link><span><b>+</b></span></li>
<<<<<<< HEAD
                        <li><Link to="Solutions.html">SOLUTIONS</Link><span><b>+</b></span></li>
                        <li><Link to="/thought-Center">THOUGHT CENTER</Link><span><b>+</b></span></li>
                        <li><Link to="/contact">CONTACT US</Link><span><b>+</b></span></li>
                        <li><Link to="JoinUs.html">JOIN US</Link><span><b>+</b></span></li>
=======
                        <li><Link to="/solutions">SOLUTIONS</Link><span><b>+</b></span></li>
                        <li><Link to="/contactus">CONTACT US</Link><span><b>+</b></span></li>
                        <li><Link to="/thought-center">Thought-Center</Link><span><b>+</b></span></li>
                        <li><Link to="/joinus">JOIN US</Link><span><b>+</b></span></li>
>>>>>>> 07163d1cd353486a761ee0b60fb469b088ebced4

                    </ul>
                    <i className="fa fa-bars" onClick={openMenu}></i>
                </nav>
            </div>
        </div>

        </>
    );
};
export default Header;