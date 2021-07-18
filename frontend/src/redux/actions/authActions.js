import axios from "axios";
import { v4 as uuid } from "uuid";
import useFindUser from "../../hooks/useFindUser";
import { SET_USER } from "../types/authTypes";

export const signUp = async (payload) => {
  axios
    .post("api/auth/signup", {
      uid: uuid(),
      ...payload,
    })
    .then((res) => {
      return res.statusText;
    });
};

export const signIn = (payload) => {
  console.log("here");
  return async (dispatch) => {
    console.log("here1");
    try {
      const response = await axios.post("api/auth/signin", {
        ...payload,
      });
      console.log(response);
      dispatch(setUser(response.data.uid));
    } catch (e) {
      console.log(e);
    }
  };
};

/* export const verifyUser = () => {
  return async (dispatch) => {
    const { user, setUser, isLoading } = useFindUser();
    dispatch({ type: SET_USER, payload: user });
  };
}; */

export const setUser = (payload) => {
  console.log(payload);
  return { type: SET_USER, payload };
};
