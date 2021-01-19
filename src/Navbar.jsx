import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
    return (
        <> 
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Hari Technical</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active"  exact  className="nav-link"  to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active"  className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active"  className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" className="nav-link" to="/contact">Contacts</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>  
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;