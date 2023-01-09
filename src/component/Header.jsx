import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Openmenu } from "../Events";
import { Closemenu } from "../Events";
import { Modal, Button } from 'react-bootstrap'


const Header=()=>{
    const  [style,setstyle] = useState({display:"none"}); 
    const closeMenu = ()=>{
        setstyle({display:"none"});
    }

    const openMenu = () =>{
        setstyle({});
    }
    return(
        <>
         {/* <!-- ---------------header contain--------------- --> */}
        <div className="header">
            <div className="conatiner">
                <nav>
                    <Link to="/">
                        <img src="/Assets/images/logo.jpg" width="70px" height="70px" to="/"/>
                    </Link>
                    <a href="#" id="GFG">
                    <h1> TECHNOCRAT</h1>
                    </a>                   <ul id="" style={style}>
                        <i className="fa fa-times" onClick={closeMenu}></i>

                        <li><Link to="/about">ABOUT US </Link><span><b>+</b></span></li>

                        <li><Link to="/expertise">EXPERTISE</Link><span><b>+</b></span></li>
                        <li><Link to="/solutions">SOLUTIONS</Link><span><b>+</b></span></li>
                        <li><Link to="/contactus">CONTACT US</Link><span><b>+</b></span></li>
                        <li><Link to="/thought-center">Thought-Center</Link><span><b>+</b></span></li>
                        <li><Link to="/joinus">JOIN US</Link><span><b>+</b></span></li>

                    </ul>
                    <i className="fa fa-bars" onClick={openMenu}></i>
                </nav>
            </div>
        </div>
        {/* {style ? <Modal style={style} onHide={closeMenu} size={"lg"}>
        <Modal.Header closeButton>
                    <Modal.Title>Join US</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Header closeMenu={closeMenu}/>
                </Modal.Body>
            </Modal> : ""} */}

        </>
    );
};
export default Header;