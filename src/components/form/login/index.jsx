import React from "react";
import "../form.scss"
import { Link } from "react-router-dom";
function Login() {

    return (
        <div className="signup">
            <div className="motel-info"></div>
            <div className="signup-form">
                <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Login
                    </button>
                    <p>already have an account? <span><Link to="/signup" >Sign Up</Link></span></p>
            </div>
        </div>
    );
}

export default Login;
