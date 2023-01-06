import React from "react";


const Footer = () => {

    return (

        <>
            {/* <!-- -------------footer contain-----------------> */}
            <div className="footer ">
                <div className="container-f">
                    <div className="row">
                        <div className="footer-col-1">
                            <h2>TEСHNОCRАT CONSULTING </h2>
                            <p style={{color: "blue"}}><b>MR. MILIND SALVE</b> </p>
                            <p> <b> Mob No</b>:- 8999210639</p>
                            <p style={{color: "blue"}}> <b> Ms Sachi Waghmare</b> :</p>
                            <p> <b> Mob No</b>:-7276216671</p>
                            <p> <b> Email</b>:-technocratconsulting21@gmail.com</p>
                            <span>Follow-us :-
                                <div className="social-icon">
                                    <a to="#"><i className="fa fa-facebook-official"></i></a>
                                    <a to="#"><i className="fa fa-instagram"></i></a>
                                    <a to="#"><i className="fa fa-youtube-play"></i></a>
                                    <a to="#"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </span>
                        </div>
                        <div className="footer-col-2">
                            <a to="#" className="links">About Us</a>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Why Technocrat</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-3">
                            <a to="#" className="links">Expertise</a>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Why Technocrat</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <a to="#" className="links">Solutions</a>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Why Technocrat</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <a to="#" className="as">Though Center</a>

                        </div>
                        <div className="footer-col-4">
                            <a to="#" className="links">Contact Us</a>

                        </div>
                        <div className="footer-col-4">
                            <a to="#" className="links">Join Us</a>

                        </div>
                    </div>
                </div>
            </div>
    
            {/* <!-- ----------copyright-------------------- --> */}
    
            <div className="copyright">
        <div className="useful-as">
            <a to="#">About</a>
            <a to="#">Accessibility</a>
            <a to="#">Help Center</a>
            <a to="#">Privacy Policy</a>
            <a to="#">Advertising</a>
            <a to="#">Get the App</a>
            <a to="#">More</a>
        </div>
        <div className="copyright-msg">
            <p>technocratconsulting &#169; 2021.All right reserved</p>
        </div>
    </div>

        </>
    );
};

export default Footer;