import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../redux/actions/authActions";

export default function SignUp() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  //TODO: Maybe email validation from server is more secure?
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase())
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const history = useHistory();
  const { user } = useSelector((state) => state.authReducer);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = inputValues;
    if (validateEmail(email) === false) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password don't match.");
      return;
    }
    setErrorMessage("");
    console.log(email, password);
    const response = signUp({ email: email, password: password });
    console.log(response);
  };
  if (user) {
    history.push("/dashboard");
  }
  return (
    // <div className="text-center d-flex flex-wrap align-items-center justify-content-center">
      <div className="col-md-4 offset-md-4 text-center mt-5">
        <div className="card card-outline-secondary"> 
          <div className="card-body">
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
              <p className="form-text small text-left text-danger">{errorMessage}</p>
              <button onClick={onSubmit} className="btn btn-lg btn-primary btn-block">
                Sign up
              </button>

              <p className="mt-4">
                <Link to="/login">Already have an account? Log in</Link>
              </p>
            </form>
          </div>
        </div>
    </div>
  );
}
