import React, { useState } from "react";


const Contact = () => {
        const APIENDPOINT = "https://jsonplaceholder.typicode.com/posts";
        const [data, setData] = useState([]);
        

    return (
        <>

            {/* <!-- ---------------header contain--------------- --> */}
            <div className="header">
                {/* <div className="conatiner">
            <nav>
                <a to="index.html">
                    <img src="images/logo.jpg" width="70px" height="70px" to="/index.html"/>
                </a>
                <h1> TECHNOCRAT</h1>
                <ul id="sidemenu">
                    <i className="fa fa-times" onclick="closemenu()"></i>

                    <li><a to="About.html">ABOUT US </a><span><b>+</b></span></li>
                    <li><a to="Expertise.html">EXPERTISE</a><span><b>+</b></span></li>
                    <li><a to="Solutions.html">SOLUTIONS</a><span><b>+</b></span></li>
                    <li><a to="Thought-Center.html">THOUGHT CENTER</a><span><b>+</b></span></li>
                    <li><a to="ContactUs.html">CONTACT US</a><span><b>+</b></span></li>
                    <li><a to="JoinUs.html">JOIN US</a><span><b>+</b></span></li>
                </ul>
                <i className="fa fa-bars" onclick="openmenu()"></i>
            </nav>
        </div> */}
                <div className="container-3">
                    <h1>Making talent conversation happen</h1>
                </div>
            </div>
            {/* <!-- ---------main contain---------------- -->
    <!-- ------contact us------- --> */}
            <section className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1670361837971!5m2!1sen!2sin"
                    width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

            </section>

            <section className="contact-us">
                <div className="row">
                    <div className="contact-col">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>XYZ Road,ABC Building</h5>
                                <p>Banglore,karnataka</p>
                            </span>

                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>8999210639/7276216671</h5>
                                <p>Monday To Saturday,9AM to 6PM</p>
                            </span>

                        </div>
                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <span>
                                <h5>technocratconsulting21@gmail.com</h5>
                                <p>Email Us Your Query</p>
                            </span>

                        </div>
                    </div>
                    <div className="contact-col">
                        <form className="comment-formc">
                            <input type="text" placeholder="Enter Your Name" required />
                            <input type="email" placeholder="Enter Your Email" required />
                            <input type="text" placeholder="Enter Your subject" required />
                            <textarea rows="5" placeholder="Massage"></textarea>
                            <button type="submit" className="hero-btn" >send massage</button>
                        </form>
                    </div>

                </div>

            </section>

            {/* <!-- -------------footer contain-----------------> */}
            {/* <div className="footer ">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h2>TEСHNОCRАT CONSULTING </h2>
                    <p style="color: blue;"><b>MR. MILIND SALVE</b> </p>
                    <p> <b> Mob No</b>:- 8999210639</p>
                    <p style="color: blue;"> <b> Ms Sachi Waghmare</b> :</p>
                    <p> <b> Mob No</b>:-7276216671</p>
                    <p> <b> Email</b>:-technocratconsulting21@gmail.com</p>
                    <p>Follow-us :-
                    <div className="social-icon">
                        <a to="#"><i className="fa fa-facebook-official"></i></a>
                        <a to="#"><i className="fa fa-instagram"></i></a>
                        <a to="#"><i className="fa fa-youtube-play"></i></a>
                        <a to="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                    </p>
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
    </div> */}
            {/* <!-- ----------copyright-------------------- --> */}
            {/* <div className="copyright">
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


    </div> */}

        </>

    );
};

export default Contact;