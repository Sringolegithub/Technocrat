import React from "react";

const JoinUsForm = () => {

    return(

        <>
            <div className="row">
        <div className="contact-col">
            <form className="comment-formc">
                <input type="text" placeholder="Enter Your  Name" required/>
                <input type="email" placeholder="Enter Your Email" required/>
                <input type="text" placeholder="Enter Your Address" required/>
                <input type="date" placeholder="Enter Your DOB" required/>
                <input type="text" placeholder="Enter Your Heighest Qualification" required/>
                <input type="number" min="0" max="100" placeholder="Enter Your CGPA/Percentage" required/>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                    value="option1" checked/>
                                <label className="form-check-label" for="gridRadios1">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                    value="option2"/>
                                <label className="form-check-label" for="gridRadios2">
                                    male
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>

            </form>
        </div>
        <div className="contact-col">

            <form className="comment-formc">
                <input type="number" placeholder="year of passing" required/>
                <input type="text" placeholder="Specialisation" required/>
                <input type="text" placeholder="current location" required/>
                <input type="text" placeholder="preferred location" required/>
                <input type="text" placeholder="collage name" required/>
                <input type="tel" placeholder="phone number" required/>
                <input type="number" min="0" max="100" placeholder="Enter Your CGPA/Percentage" required/>
            </form>
        </div>
        <label for="formFileLg" className="form-label "><b>Uplode resume</b></label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" width="50%" /><br/>

        <button type="submit" className="hero-btn " >Submit</button>

    </div>      
        </>
    );
};

export default JoinUsForm;