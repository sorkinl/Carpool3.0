import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../../redux/actions/authActions";

export default function LogIn() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  //const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const { user } = useSelector((state) => state.authReducer);
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputValues;
    console.log("happens");
    dispatch(signIn({ email: email, password: password }));
    console.log("called");
  };
  useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
  }, [user]);

  return (
    // <div className="text-center vh-100 d-flex align-items-center justify-content-center">
    <div className="col-md-4 offset-md-4 text-center mt-5">
      <div className="card card-outline-secondary">
        <div className="card-body">
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
            {/* <div className="checkbox mt-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div> */}
            <p className="form-text small text-left">
              <Link to="/password-reset">Forgot password?</Link>
            </p>
            <button
              onClick={onSubmit}
              className="btn btn-lg btn-primary btn-block"
            >
              Sign in
            </button>
            <p className="mt-4">
              <Link to="/signup">Don't have an account? Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
