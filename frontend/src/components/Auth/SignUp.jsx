import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../redux/actions/authActions";

export default function SignUp() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = inputValues;
    if (password != confirmPassword) {
      setErrorMessage("Password don't match.");
      return;
    }
    console.log(email, password);
    const response = signUp({ email: email, password: password });
    console.log(response);
  };

  return (
    <div className="text-center d-flex vh-100 flex-wrap align-content-center justify-content-center">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
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
          type="password"
          name="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => handleOnChange(e)}
        />

        <label for="inputPassword" className="sr-only">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="inputPassword"
          className="form-control mb-3"
          placeholder="Confirm password"
          required
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={onSubmit} className="btn btn-lg btn-primary btn-block">
          Sign up
        </button>

        <p className="mt-4">
          <Link to="/login">Already have an account? Log in</Link>
        </p>
      </form>
    </div>
  );
}
