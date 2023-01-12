import React from "react";
import { useState } from "react";
// import JoinUsForm from "./JoinUsForm";
// import axios from "axios";
import { Modal, Button } from 'react-bootstrap'
import JoinUsForm from "./JoinUsForm";
const JoinUs = () => {

    const [show, setshow] = useState(false);

    const handleClose = () => {
        setshow(false);
    }
    return (

        <>
            <div className="start">
                <br /> <br /> <br /> <br /> <br />
                <h5><p>As India’s leading talent solutions provider, Softtronix’s clients
                    range from startups to large enterprises. Our winning mantra is —
                    “Team work makes the dream work”.</p>
                <p>We strongly believe that a diverse workforce is essential to dynamic
                    growth and innovation — and that’s why we have people from all over
                    India working with us.</p></h5>
                <h5 className="form-heading"><span><i>Are you passionate, driven and want to
                    make your mark in the recruitment space?</i></span></h5>

            </div>
            <div >
                <div >
                    <a className="joinusform">
                        <button className="btn btn-primary hero-btn" id="btnf" onClick={() => setshow(true)}>Join us</button></a>
                </div>
            </div>



            <div id="Industries">
                <div className="">
                    <div className="">
                        <div className="">
                            <div
                                className="">
                                <div className="right-bottom"><br /><br /><br /> <br /> <br /> <br />
                                    <p>As India’s top talent solutions provider, Softtronix’s clients range
                                        from startups to large enterprises. Our winning mantra is — “Team
                                        work makes the dream work”.</p>
                                    <p>We strongly believe that a diverse workforce is essential to dynamic
                                        growth and innovation — and that’s why we have people from all over
                                        India working with us.</p>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <noscript>
                                        <img
                                            className=""
                                            src="../wp-content/uploads/2022/06/Banner-1-1.png"
                                            alt="career page image 1" />
                                    </noscript>
                                    <img
                                        className="" alt="career page image 1" />
                                </div>
                            </div>
                            <div className="">
                                <div className=""><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div
                                    className="">
                                    <div className="">
                                        <h3 className="right-bottom"><span> Why should you</span> <i>join us?</i>
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    className=" main-content">
                                    <div className="">
                                        <noscript>
                                            <img
                                                className=""
                                                src="../wp-content/uploads/2022/06/1-%e2%80%93-2.png"
                                                alt="careers icon 3" />
                                        </noscript>
                                        <img
                                            className="" alt="careers icon 3" /> <br /><br />
                                        <p>We have serviced <b>1000+</b><br />enterprise customers, of which<br />50
                                            are Fortune 500 companies</p>
                                    </div>
                                </div>
                                <div
                                    className=" ">
                                    <div className="">
                                        <noscript>
                                            <img
                                                className=""
                                                src="../wp-content/uploads/2022/06/1-%e2%80%93-1.png"
                                                alt="Internet" />
                                        </noscript>
                                        <img
                                            className="" alt="Internet" /> <br /><br />
                                        <p>Over <b>2000</b> institutions<br /> across India have <br />engaged with
                                            us<br /></p>
                                    </div>
                                </div>
                                <div
                                    className="">
                                    <div className="">
                                        <noscript>
                                            <img
                                                className=""
                                                src="../wp-content/uploads/2022/06/1-1.png"
                                                alt="careers image 1" />
                                        </noscript>
                                        <img
                                            className="" alt="careers image 1" /> <br /> <br />
                                        <p> We have a talent network of <br /><b>5M+</b> candidates across
                                            domains,<br />expertise and experience levels</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=""><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="" >
                            <div className="">
                                <div className="">
                                    <div className="" >
                                        <h3 className="right-bottom"><span> Employees </span> <i>first</i></h3>
                                        <div>
                                            <p>Softtronix’s successful run of over two decades is based on an
                                                ethos that embraces trust, empathy, and approachability.
                                                Everyone’s voice matters.</p>
                                            <p>To us, winning in the workplace comes before winning in the
                                                marketplace. That’s why every employee is encouraged to realise
                                                their full potential, to think out of the box, take calculated
                                                risks and grow beyond their dreams.</p>
                                            <p>We provide equal opportunities for career-building — because when
                                                our employees grow, so does the organisation. To facilitate
                                                this, our internal processes and policies aim to empower our
                                                employees and consistently reward their performance.</p>
                                            <h3 className="right-bottom"><span> Going the extra mile </span> <i>—
                                                with trust, integrity and tenacity</i></h3>
                                            <p><b><i>Our vision — to evolve constantly by incorporating
                                                technology and human intellectual capital to offer
                                                innovative recruitment solutions.</i></b></p>
                                            <p>We may seem to wear our successes lightly, but make no mistake,
                                                we’re tenacious too. That’s how we have grown and diversified as
                                                leaders in our field. Even as we celebrate our success stories
                                                as well as share our failures, our focus continues to remain on
                                                building our relationship with our clients. We strive to
                                                consistently exceed their expectations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="" >
                    <div className="">
                        <div className="" >
                            <div className="">
                                <div className="">
                                    <div className="" >
                                        <h3 className="right-bottom"><span>We are Great Place to
                                            Work-Certified™!</span></h3>
                                        <p>GPTW is the gold standard for organisations that have successfully
                                            established a strong workplace culture. At Softtronix, we have
                                            consistently raised our workplace standards and are committed to our
                                            high-trust, high-performance culture.</p>
                                        <p>This acknowledgement is an outcome of the employee survey by the
                                            Great Place to Work® Institute that assessed us on the following
                                            parameters:</p>
                                        <ul>
                                            <li>Credibility of management</li>
                                            <li>Respect for people</li>
                                            <li>Fairness at the workplace</li>
                                            <li>Pride</li>
                                            <li>Camaraderie between people</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="" ><br /> <br /> <br /> <noscript><img
                                        className=""
                                        src="../wp-content/uploads/2022/01/Fotter-Tag.png"
                                        alt="" /></noscript><img />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <div className="">
                        <div className="" >
                            <div className="">
                                <div className="">
                                    <div className="" >
                                        <h3 className="right-bottom"><span>Life at </span> <i>Softtronix </i></h3>
                                        <p>On our campus, every day is a seamless blend of productivity,
                                            inspired moments, fun times, and laughter. Our young, enthusiastic
                                            workforce enjoys a host of career-building opportunities such as
                                            varied learning experiences, stints with diverse customers and
                                            exposure to a broad spectrum of recruitment processes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div >
                    <a className="joinusform">
                        <button className="btn btn-primary hero-btn" id="btnf" onClick={() => setshow(true)}>Join us</button></a>
                </div>
            </div>

            {show ? <Modal show={show} onHide={handleClose} size={"lg"}>
                <Modal.Header closeButton>
                    <Modal.Title>Join US</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <JoinUsForm handleClose={handleClose}/>
                </Modal.Body>
            </Modal> : ""}
        </>
    );

};

export default JoinUs;


