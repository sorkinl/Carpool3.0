import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./../hooks/UserContext";
import Loading from "./../components/Loading";
import { useSelector } from "react-redux";
export default function PrivateRoute(props) {
  const { user } = useSelector((state) => state.authReducer);
  const { component: Component, ...rest } = props;
  if (isLoading) {
    return <Loading />;
  }
  if (user) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  //redirect if there is no user
  return <Redirect to="/login" />;
}
