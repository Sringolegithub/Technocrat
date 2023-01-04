import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (

        <>

            {/* <!-- ---------------header contain--------------- --> */}
            <div className="header">
                {/* <div className="conatiner">
                    <nav>
                        <Link to="index.html">
                            <img src="/Assets/images/logo.jpg" width="70px" height="70px" href="/index.html" />
                        </Link>
                        <h1> TECHNOCRAT</h1>
                        <ul id="sidemenu">
                            <i className="fa fa-times" onclick="closemenu()"></i>

                            <li><Link to="/src/Components/about.jsx">ABOUT US </Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/expertise.jsx">EXPERTISE</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/solutions.jsx">SOLUTIONS</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/thoughtCenter.jsx">THOUGHT CENTER</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/contact.jsx">CONTACT US</Link><span><b>+</b></span></li>
                            <li><Link to="/src/Components/joinus.jsx">JOIN US</Link><span><b>+</b></span></li>
                        </ul>
                        <i className="fa fa-bars" onClick="openmenu()"></i>
                    </nav>
                </div> */}
                <div className="container-2">
                    <div className="container-col-2">
                        <p>We make dreams career happen</p>
                        <p>We make great team happen</p>
                        <h1>We Make it happen</h1>

                    </div>

                </div>
            </div>
            {/* <!-- -----------------Main contain-------------->  */}
            <div className="main-contain ">
                {/* <!-- -----------row-1---------- --> */}
                <div className="row-1">
                    <div className="column-1">
                        <div>
                            <p> Greetings From Teсhnоcrаt Consulting. <br />
                                We аre writing in resроnse tо yоur jоb роstings, we hаve seen
                                оn yоur Соmраny's Website. Throughout the yeаrs оf оur
                                exрerienсe, we hаve wоrked аnd reсruited fоr vаriоus
                                Соmраnies аnd MNСs.<br />
                                Оur visiоn is tо emerge аs оne оf the mоst resрeсtable HR
                                serviсes соmраnies in the соuntry аnсhоred оn the vаlues оf
                                grоwth, рrоfessiоnаlism, dignity, аnd diversity. In а tight jоb
                                mаrket, effeсtive reсruitment is раrаmоunt. Finding the time аnd
                                the resоurсes tо bring in the best of саndidаtes, thоugh, is
                                inсredibly сhаllenging.<br />
                                We hаve wоrked аnd reсruited а wide rаnge оf Sоftwаre
                                Develорers suсh аs Reасt Js, Nоde Js Аngulаr, Jаvа,
                                Рythоn, SаlesFоrсe, Dаtа sсienсe, FullStack, Software Tester,
                                Application Developer, Asp.Net, PHP аnd mаny mоre.<br />
                                Whаt’s gоne, саn’t be сhаnged but whаt is соming is in оur
                                hаnds can surely be. The раndemiс hаd brоught undesirаble
                                соnsequenсes in оur lives, but the соming
                                finаnсiаl yeаr саn be brightened if we fосus оn whаt we
                                hаve аnd whаt we саn dо.<br />
                                Рrорer Рlаnning is the key tо every suссessful business. А
                                vаluаble аnd tаlented wоrking teаm rаises the рeаk оf every
                                millenniаl соmраny. Sо, stаrt hiring the gоlden gems sсаttered
                                асrоss different regiоns оf the соuntry
                                аnd build yоur emрire. </p>
                        </div>
                        <div>
                            <img src="/Assets/images/AboutImg/Meeting2.png" width="380px" />

                        </div>
                    </div>
                    <div className="column-2">
                        <div>
                            <h2>500+</h2>
                            <b>Client Relationship</b>
                        </div>
                        <div>
                            <h2>100+</h2>
                            <b>Pro engagements</b>
                        </div>
                        <div>
                            <h2>5M+</h2>
                            <b>Candidates database </b>
                        </div>
                        <div>
                            <h2>1M+</h2>
                            <b>Assessements per year</b>
                        </div>
                        <div>
                            <h2>1k+</h2>
                            <b>COXs on boarded</b>
                        </div>

                    </div>
                </div>
                {/* <!-- -----------row-2---------- --> */}
                <div className="row-2">
                    <h1>We make coustomer delight happen</h1>
                    <div className="though-center">
                        <div>
                            <i className="fa fa-search"></i>
                            <h2>RECRUITMENT PROCESS OUTSOURCING(PRO)</h2>
                            <p className="para"> Holistic services with complete owenership for
                                long-term efficiencies
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-check"></i>
                            <h2>PERMANENT HIRING</h2>
                            <p className="para">The best talent with custom-built solutins and Expensive
                                candidate network
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-clock-o"></i>
                            <h2>PROFFESSIONAL STAFFING</h2>
                            <p className="para">Staffing solution to hire specialised talent on demand ,
                                at scale

                            </p>
                        </div>

                    </div>
                    <div className="though-center">
                        <div>
                            <i className="fa fa-users"></i>
                            <h2>LEADERSHIP HIRING</h2>
                            <p className="para"> The best Leadership talent for organisations to
                                become future ready
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-user-circle"></i>
                            <h2>DIVERSITY AND INCLUSION</h2>
                            <p className="para">Embling Organisation to build inclusive
                                workplace with diverse talent
                            </p>
                        </div>
                        <div>
                            <i className="fa fa-desktop"></i>
                            <h2>DIGITAL FIRST HIRING</h2>
                            <p className="para">Digitised hiring enabled by technology innovation
                                for borderless requitment

                            </p>
                        </div>

                    </div>


                </div>
                {/* <!-- -----------row-3---------- --> */}
                <div className="row-3">

                </div>
                {/* <!-- -----------row-4---------- --> */}
                <div className="row-4">

                    <h1>We made it happen for them</h1>

                    <div className="row-col-1">
                        <div className="row-col-2">
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/AccrualifyLogo.png" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/Appcino-Logo.png" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/Euphoric ThoughtsLogo.png" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/FABLEMasterLogo2022.webp" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/HSM Edifice logo.jpg" />
                            </div>
                        </div>
                        <div className="row-col-2">
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/KloudRAC logo.png" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/TechAim.png" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/Trust Syst & Softlogo.png" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/UplersLogo.jpg" />
                            </div>
                            <div className="col-5">
                                <img src="/Assets/images/Partners Logo/Virtual GalaxyLogo.png" />
                            </div>
                        </div>
                    </div>

                </div>


                {/* <!-- //-----------row-5---------- --> */}
                <div className="row-5">
                    <h1 className="sub-title"><i className="fa fa-hand-o-right" width="20px"></i> Thought center</h1>
                    <div className="though-center">
                        <div>
                            <i className="fa fa-newspaper-o"></i>
                            <h2>NEWS</h2>
                            <p> The news, the views, the updates, the press releases, the media coverage, everything.
                                Find
                                out
                                what’s happening at Technocrat.
                                lot of things during the process. A few of those things are the
                                current trends,the design norms and foremostly, the target
                                audience behavior.
                            </p>
                            <Link to="#">View All</Link>
                        </div>
                        <div>
                            <i className="fa fa-file-text"></i>
                            <h2>RESOURCES</h2>
                            <p>The blogs, the case studies, the
                                whitepapers. Find all the articles and
                                infographics.
                            </p>
                            <Link to="#">View All</Link>
                        </div>
                        <div>
                            <i className="fa fa-line-chart"></i>
                            <h2>REPORTS</h2>
                            <p>The news, the views, the updates, the press releases, the media coverage, everything.
                                Find out what’s happening at Technocrat.</p>
                            <Link to="#">View All</Link>
                        </div>

                    </div>

                </div>

            </div>
                        
                        {/* <!-- //-------------footer contain--------------- --> */ }
    {/* <div className="footer ">
        <div className="container">
            <div className="row">
                <div className="footer-col-1">
                    <h2> TEСHNОCRАT CONSULTING </h2>
                    <p style={{color: "blue"}}><b>MR. MILIND SALVE</b> </p>
                    <p><b>  Mob No</b>:- 8999210639</p>
                    <p style={{color: "blue"}}> <b>  Ms Sachi Waghmare</b> :</p>
                    <p> <b> Mob No</b>:-7276216671</p>
                    <p> <b> Email</b>:-technocratconsulting21@gmail.com</p>
                    <p>Follow-us :-
                        <div className="social-icon">
                            <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                            <Link to="#"><i className="fa fa-instagram"></i></Link>
                            <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                            <Link to="#"><i className="fa fa-linkedin"></i></Link>
                        </div>
                    </p>
                </div>
                <div className="footer-col-2">
                    <Link to="#" className="links">About Us</Link>
                    <ul>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Why Technocrat</Link></li>
                        <li><Link to="#">Our Journey</Link></li>
                        <li><Link to="#">Leadership</Link></li>
                        <li><Link to="#">Location</Link></li>
                    </ul>
                </div>
                <div className="footer-col-3">
                    <Link to="#" className="links">Expertise</Link>
                    <ul>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Why Technocrat</Link></li>
                        <li><Link to="#">Our Journey</Link></li>
                        <li><Link to="#">Leadership</Link></li>
                        <li><Link to="#">Location</Link></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Solutions</Link>
                    <ul>
                        <li><Link to="#">Overview</Link></li>
                        <li><Link to="#">Why Technocrat</Link></li>
                        <li><Link to="#">Our Journey</Link></li>
                        <li><Link to="#">Leadership</Link></li>
                        <li><Link to="#">Location</Link></li>
                    </ul>
                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Though Center</Link>

                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Contact Us</Link>

                </div>
                <div className="footer-col-4">
                    <Link to="#" className="links">Join Us</Link>

                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- -//---------copyright-------------------- --> */ }
    {/* <div className="copyright">
        <div className="useful-links">
            <Link to="#">About</Link>
            <Link to="#">Accessibility</Link>
            <Link to="#">Help Center</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Advertising</Link>
            <Link to="#">Get the App</Link>
            <Link to="#">More</Link>
        </div>
        <div className="copyright-msg">
            <p>technocratconsulting &#169; 2021.All right reserved</p>

        </div>
    </div> */}
                    </>
                    );
};
export default Home;