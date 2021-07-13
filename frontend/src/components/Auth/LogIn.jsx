import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../redux/actions/authActions";

export default function LogIn() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const user = useSelector((state) => state);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputValues;
    console.log("happens");
    dispatch(signIn({ email: email, password: password }));
    console.log("called");
  };
  console.log();
  return (
    <div className="text-center vh-100 d-flex align-items-center justify-content-center">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          name="email"
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
          onChange={(e) => handleOnChange(e)}
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          name="password"
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => handleOnChange(e)}
        />
        <div className="checkbox mb-3 mt-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button onClick={onSubmit} className="btn btn-lg btn-primary btn-block">
          Sign in
        </button>
        <p className="mt-4">
          <Link to="/signup">Don't have an account? Sign up</Link>
        </p>
      </form>
    </div>
  );
}
