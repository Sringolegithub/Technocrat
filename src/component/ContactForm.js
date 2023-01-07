import React, { useState } from "react";
import Axios from 'axios';

const ContactForm = () => {
    const APIENDPOINT = "https://jsonplaceholder.typicode.com/posts";
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        text: "",
    });

    function submit(e) {
        e.preventDefault();
        Axios.post(APIENDPOINT, {
            name: data.name,
            email: data.email,
            subject: parseInt(data.subject),
            text: data.text,
        }).then(
            res => {
                console.log(res.data)
            }
        )
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }


    return (
        <>
            <form className="comment-formc" onSubmit={(e) => submit(e)}>
                <input id="name" type="text" placeholder="Enter Your Name" required />
                <input id="email" type="email" placeholder="Enter Your Email" required />
                <input id="subject" type="text" placeholder="Enter Your subject" required />
                <textarea id="text" rows="5" placeholder="Massage"></textarea>
                <button type="submit" className="hero-btn"> Submit </button>
            </form>
        </>
    );
};

export default ContactForm;