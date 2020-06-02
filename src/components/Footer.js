/////////////////// Footer.js ////////////////////

import React from 'react';
import '../App.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="socials">
                    <a href="/"><img src={require("../images/facebook.png")} alt="fb" /></a>
                    <a href="/"><img src={require("../images/google-plus.png")} alt="g+" /></a>
                    <a href="/"><img src={require("../images/linkedin.png")} alt="linkd" /></a>
                    <a href="/"><img src={require("../images/email.png")} alt="email" /></a>
                    <a href="/"><img src={require("../images/instagram.png")} alt="insta" /></a>
                    <a href="/"><img src={require("../images/skype.png")} alt="skype" /></a>
                    <a href="/"><img src={require("../images/youtube.png")} alt="yt" /></a>
                    <a href="http://www.facebook.com/sharer.php?u=<?php echo $Url; ?>" target="_blank" rel="noopener noreferrer"><img
                        src={require("../images/share.png")} alt="share" /></a>
                </div>
                <div className="footer-text" id="footer">
                    <p>This website is designed to be disability friendly. If you have any suggestions for
                    improving accessibility, please send us your feedback through one of our email
                    links.</p>
                </div>
            </footer>
        )
    }
}