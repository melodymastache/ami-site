import React from 'react';
import scrollDown from "../images/arrow-circle-down-solid.svg";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbox">

                <a href="/" alt="logo-home-link" id="logo">Ami Gordon</a>

                <div className="nav-links">

                    <div className="link"><a href="/" alt="home-link">Home</a></div>
                    <div className="link"><a href="/about" alt="about-link">About</a></div>

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