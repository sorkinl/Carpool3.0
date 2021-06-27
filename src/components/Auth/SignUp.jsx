import React from "react";
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="text-center d-flex vh-100 flex-wrap align-content-center justify-content-center">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input 
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    required autofocus
                />
                
                <label for="inputPassword" className="sr-only">Password</label>
                <input 
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    required
                />

                <label for="inputPassword" className="sr-only">Confirm password</label>
                <input 
                    type="password" 
                    id="inputPassword" 
                    className="form-control mb-3" 
                    placeholder="Confirm password" 
                    required
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>

                <p className="mt-4">
                    <Link to="/login">
                        Already have an account? Log in
                    </Link>
                </p>
            </form>
        </div>
    );
}