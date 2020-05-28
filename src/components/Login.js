import React from 'react';

export default class Login extends React.Component {
    constructor() {
        super();
        this.validateForm = this.validateForm.bind(this);
    }
    validateForm() {
        var pass = document.forms["login-form"]["password"].value;
        if (pass === "") {
            alert("Password is blank.");
            return false;
        }
    }
    render() {
        return (
            <div>
                {/* eslint-disable-next-line */}
                <h1 className="title"><a name="protected">Protected Resources</a></h1>
                <p>Please type in the password provided to you in order to access these resources.</p>
                <form className="login" name="login-form" onSubmit={this.validateForm()}>
                    <label for="password">Password:</label>
                    <input type="password" name="password" />
                    <input type="image" src={require("../images/submit.svg")} alt="submit-button" id="submit=button" />
                </form>
            </div>
        )
    }
}