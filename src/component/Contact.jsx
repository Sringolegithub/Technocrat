import React, { useState } from "react";


const Contact = () => {
    // const URL=" ";
    // const [data,setData]=useState({
    //     name:" ",
    //     email:" ",
    //     subject:" ",
    //     message:" "
    // })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    function submit(e){
        e.preventDefault();
        const userdata ={};
        userdata.name = name;
        userdata.email = email;
        userdata.subject = subject;
        userdata.message = message;
        console.log(userdata);   
    }

    function handleName(e){
        // console.log(e.target.value);
        setName(e.target.value);
        };
    
    function handleEmail(e){
        setEmail(e.target.value);
        };

        
    function handleSubject(e){
        setSubject(e.target.value);
        };

        
    function handleMessage(e){
        setMessage(e.target.value);
        };

    return (
        <>

            {/* <!-- ---------------header contain--------------- --> */}
            <div className="header">
               
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
                    <div className="contact-col" >
                        <form className="comment-formc" >
                            <input  id="name" type="text" placeholder="Enter Your Name" onChange={handleName} required />
                            <input type="email" placeholder="Enter Your Email"  onChange={handleEmail} required />
                            <input type="text" placeholder="Enter Your subject"  onChange={handleSubject} required />
                            <textarea rows="5" placeholder="Message"  onChange={handleMessage}></textarea>
                            <button type="submit" className="hero-btn" onClick={submit}>send massage</button>
                        </form>
                    </div>

                </div>

            </section>

            
        </>

    );
};

export default Contact;