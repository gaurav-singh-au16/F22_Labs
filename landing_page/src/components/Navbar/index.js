import React from 'react'
import logo from '../../assets/omega-copy-2_2021-07-24/omega-copy-2.png'
import './index.css'

function Navbar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} className=""/>
                </a>

                <ul className="nav nav-pills">
                    <li type="button" class="btn dropdown-toggle menu-dropdown" data-bs-toggle="dropdown" aria-expanded="false">Demos</li>
                    <li className="nav-item"><a href="#" className="nav-link menu">Pages</a></li>
                    <li className="nav-item"><a href="#" className="nav-link menu">Support</a></li>
                    <button href="#" className="menu-button btn">Get Started</button>
                </ul>
                </header>
        </div>
    )
}
 
export default Navbar
