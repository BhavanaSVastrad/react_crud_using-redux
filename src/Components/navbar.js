import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FaHome } from "react-icons/fa";

const NavbarComp = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark "  >
            <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
                    <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to={'/'} style={{ color: 'white',paddingTop:5 }} ><FaHome/> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/user'} style={{ color: 'white' ,paddingTop:5}}>User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/counter'} style={{ color: 'white' ,paddingTop:5}}>Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/countercopy'} style={{ color: 'white' ,paddingTop:5}}>CounterCopy</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
          
    )
}

export default NavbarComp;

