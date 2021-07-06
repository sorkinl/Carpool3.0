import React from "react";
import { Link } from 'react-router-dom';

export default function LogIn() {
    return (
        <div className="text-center vh-100 d-flex align-items-center justify-content-center">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                <div className="checkbox mb-3 mt-3">
                    <label>
                        <input 
                            type="checkbox" 
                            value="remember-me"
                        /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            
                <p className="mt-4">
                    <Link to="/signup">
                        Don't have an account? Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
}
