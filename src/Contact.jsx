import React from 'react';

const Contact = () => {
    const onsubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <>
            <div className="top-heading">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-6 mx-auto">
                    <form onSubmit={onsubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputname">Full Name</label>
                            <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter Full Name" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhon">Phone Number</label>
                            <input type="number" className="form-control" id="exampleInputPhon" placeholder="Enter Phoner Number" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputemail">Email</label>
                            <input type="email" className="form-control" id="exampleInputemail" placeholder="Enter Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputmessage">Message</label>
                            <textarea type="number" className="form-control" id="exampleInputmessage" placeholder="Message"  rows="7" cols="50"/>
                        </div>
                        <button type="submit" className="btn btn-outline-info">Submit</button>
                        </form>
                    </div>

                </div>
                <div className="bottom-space">

                </div>
            </div>
        </>
    );
}
export default Contact;