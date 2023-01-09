import React from "react";
// import JoinUs from "./JoinUs";

const JoinUsForm = (props) => {

    const save = (e) => {
        e.preventDefault();
        props.handleClose();
    }
    return (

        <>

            <div className="contact-col">
                <form className="" onSubmit={save}>
                    <div className="col">
                        <input className="form-control m-1" type="text" placeholder="Enter Your  Name" required />
                        <input className="form-control m-1" type="email" placeholder="Enter Your Email" required />
                        <input className="form-control m-1" type="text" placeholder="Enter Your Address" required />
                    </div>
                    <div className="col">
                        <input className="form-control m-1" type="date" placeholder="Date Of Birth:-" required />
                        <input className="form-control m-1" type="text" placeholder="Enter Your Heighest Qualification" required />
                        <input className="form-control m-1" type="number" min="0" max="100" placeholder="Enter Your CGPA/Percentage" required />
                    </div>
                    <div className="col">
                        <input className="form-control m-1" type="number" placeholder="year of passing" required />
                        <input className="form-control m-1" type="text" placeholder="Specialisation" required />
                        <input className="form-control m-1" type="text" placeholder="current location" required />
                    </div>
                    <div className="col">
                        <input className="form-control m-1" type="text" placeholder="preferred location" required />
                        <input className="form-control m-1" type="text" placeholder="collage name" required />
                        <input className="form-control m-1" type="tel" placeholder="phone number" required />
                    </div>
                    <div className="row m-1">
                        <div class="col-sm-4">
                            <label for="staticEmail2" class="visually-hidden">Email</label>
                            <input type="number" class="form-control" id="staticEmail2" placeholder="Enter CGPA" />
                        </div>
                        
                        <div className="col-sm-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <label for="inputPassword2" class="visually-hidden">Password</label>
                            <input type="file" class="form-control" id="inputGroupFile01" />
                        </div>
                    </div>
                <div style={{float:"right"}}>
                    <button type="" onClick={props.handleClose} className="form-control btn btn-secondary btn-md w-100 mx-3" >close</button>
                    <button type="submit" className="form-control btn btn-primary btn-md m-2 w-100" >Submit</button>
                </div>
                </form>
            </div >

        </>
    );
};

export default JoinUsForm;