import React from "react";

const Expertise = () => {

    return(

        <>
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
            <h1>WMaking futute-ready talent happen</h1>
        </div>
    </div>
    {/* <!-- ---------main contain---------------- --> */}
    <div className="main-contain">

        <div className="row-3">
            <h1>Making seamless hiring happen</h1>
            <div className="col-3">
                <div className="row-col-3">
                    <div className="imgs">
                        <img src="/Assets/images/Expertiesimg/exp1.png"/>
                    </div>
                    <div className="content">
                        <h2> Internet</h2>
                        <p>Our industry expertise in both consumer and B2B verticals is
                            far reaching. We cover the length and breadth of internet businesses,
                            from mobility to health, retail to food delivery, and more. Our
                            exceptional search capabilities help you find the right candidate
                            to seamlessly get your online business to where it needs to be.
                        </p>
                    </div>
                </div>
                <div className="row-col-4">
                    <div className="imgs">
                        <img src="/Assets/images/Expertiesimg/tech and saas.png"/>
                    </div>
                    <div className="content">
                        <h2>Technology and SaaS</h2>
                        <p>To keep up with the globally booming technological landscape,
                            tech organisations are on the lookout for talent to build
                            solutions that solve deeper customer problems. Tech
                            professionals need to have a blend of superior technical
                            skills, excellent understanding of the business domain
                            and keen insight of the behavioural patterns of users.
                            We have an outstanding track record in helping our clients
                            discover the right tech talent.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row-col-3">
                    <div className="imgs">
                        <img src="/Assets/images/Expertiesimg/IT and ofshoring.png"/>
                    </div>
                    <div className="content">
                        <h2>IT and Offshoring</h2>
                        <p>Being the largest employer of workforce in the country,
                            organisations in IT and Offshoring onboard tens of thousands
                            of candidates every year. With our deep domain expertise in
                            the industry and the ability to scale up fast, we’ve been able
                            to fulfill the talent requirements of the leading employers
                            for many years.
                        </p>
                    </div>
                </div>
                <div className="row-col-4">
                    <div className="imgs">
                        <img src="/Assets/images/Expertiesimg/Global and house center.png"/>
                    </div>
                    <div className="content">
                        <h2>Global In-house Centres (GIC)</h2>
                        <p>We’re proud to have partnered with 100+ global employers in setting
                            up their GICs in India. We help global clients discover the market
                            and start the operations, build the required expertise, scale up
                            along their growth journeys and achieve process excellence. </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row-col-3">
                    <div className="imgs">
                        <img src="/Assets/images/Expertiesimg/EMPI.png"/>
                    </div>
                    <div className="content">
                        <h2>Engineering, Manufacturing, Process and Infrastructure (EMPI)</h2>
                        <p>The advancement of artificial intelligence and robotics technologies
                            is redefining the recruitment process for employers in the EMPI sector.
                            We understand the evolving landscape and equip you for the changing
                            market demands by fulfilling your talent requirements at scale.
                        </p>
                    </div>
                </div>
                <div className="row-col-4">
                    <div className="imgs">
                        <img src="/Assets/images/Expertiesimg/Domestic Bussiness.png"/>
                    </div>
                    <div className="content">
                        <h2>Domestic Businesses</h2>
                        <p>We work with home-grown organisations to transform their current
                            business models and internal technologies. We help them find
                            the best talent for their domain-specific or multi-city hiring
                            requirements. Be it service businesses such as Banking, Telecom,
                            Media etc. or product businesses such as FMCG, Consumer Durables,
                            Pharmaceuticals etc. we enable organisations with the right talent
                            throughout their growth stages.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </>
    );
};

export default Expertise;