import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from "../src/img/img2.png";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav-bg">        
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}</h1>
                                    <h1><strong className="brand-name">Hari Technical</strong></h1>
                                    <h2 className="my-3">We are the team of telented developer making website</h2>
                                    <div className="mt-3">
                                        <NavLink className="btn-get-started" to={props.visit}>
                                        {props.btnName}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img src={props.imgsource} alt="homeImage" className="img-fluid animated"></img>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottom-space">

                    </div>
                </div>
            </section>   
        </>
    );
}
export default Common;