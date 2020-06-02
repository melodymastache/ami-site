import React from 'react';
import logo from '../images/Ami-Gordon-logo.png';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbox" onScroll={this.toggleDownArrow}>

                <a href="/" alt="logo-home-link" id="logo"><img src={logo} alt="logo" /></a>

                <div className="nav-links">

                    <div className="link"><a href="/about" alt="about-link">About</a></div>

                    {/**************** SERVICES DROPDOWN ********************/}
                    <div className="dropdown-container">

                        <button className="dropdown-button link">Services <img src={require("../images/caret-down-solid.svg")} alt="caret-icon" id="caret-down" /></button>

                        <div className="dropdown-content">
                            <a href="/services/tutoring" alt="tutoring-services" className="link">Tutoring</a>
                            <a href="/services/communications" alt="communication-services" className="link">Communications</a>
                            <a href="/services/disability-advocacy" alt="disability-advocacy-services" className="link">Disability Advocacy</a>
                        </div>

                    </div>

                    {/*********************** RESOURCES DROPDOWN ********************/}
                    <div className="dropdown-container">

                        <button className="dropdown-button link">Resources <img src={require("../images/caret-down-solid.svg")} alt="caret-icon" id="caret-down" /></button>

                        <div className="dropdown-content">
                            <a href="/resources" alt="online-resources-link" className="link">Online Resources</a>
                            <a href="/resources/#protected" alt="protected-resources-link" className="link">Protected Resources</a>
                        </div>

                    </div>

                    <div className="link"><a href="/contact" alt="contact-link" id="contact-link">Contact</a></div>
                
                </div>
            </div>
        )
    }
}