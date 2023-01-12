import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {

    return (

        <>
            {/* <!-- -------------footer contain-----------------> */}
            <div className="footer ">
                <div className="container-f">
                    <div className="row-f">
                        <div className="footer-col-1">
                            <h2>TEСHNОCRАT CONSULTING </h2>
                            <p style={{ color: "blue" }}><b>MR. MILIND SALVE</b> </p>
                            <p> <b> Mob No</b>:- 8999210639</p>
                            <p style={{ color: "blue" }}> <b> Ms Sachi Waghmare</b> :</p>
                            <p> <b> Mob No</b>:-7276216671</p>
                            <p> <b> Email</b>:-technocratconsulting21@gmail.com</p>
                                <div className="social-icon">
                            <span><b> Follow-us :- </b>
                                    <a to="#"><i className="fa fa-facebook-official" style={{color:"rgb(53, 67, 223)"}}></i></a>
                                    <a to="#"><i className="fa fa-instagram" style={{color:"rgb(212, 59, 125)" }}></i></a>
                                    <a to="#"><i className="fa fa-youtube-play" style={{color:"rgb(231, 36, 36)"}}></i></a>
                                    <a to="#"><i className="fa fa-linkedin" style={{color:"rgb(53, 67, 223)"}}></i></a>
                            </span>
                                </div>
                        </div>
                        <div className="footer-col-2">
                            <Link to="/about" className="links">About Us</Link>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Why Technocrat</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-2">
                            <Link to="/expertise" className="links">Expertise</Link>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Why Technocrat</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-2">
                            <Link to="/solutions" className="links">Solutions</Link>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Why Technocrat</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-2">
                            <Link to="/thought-center" className="as">Though Center</Link>

                        </div>
                        <div className="footer-col-2">
                            <Link to="/contactus" className="links">Contact Us</Link>

                        </div>
                        <div className="footer-col-2">
                            <Link to="joinus" className="links">Join Us</Link>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ----------copyright-------------------- --> */}

            <div className="copyright">
                <div className="useful-links">
                    <Link to="/about" style={{color:"white"}}> About </Link>
                    |
                    <a to="#" > Accessibility </a>
                    |
                    <a to="#" > Help Center </a>
                    |   
                    <a to="#" > Privacy Policy </a>
                    |
                    <a to="#" > Advertising </a>
                    |
                    <a to="#" > Get the App </a>
                    
                </div>
                <div className="copyright-msg">
                    <p >Technocrat Consulting &#169; 2021. All right reserved</p>
                </div>
            </div>

        </>
    );
};

export default Footer;