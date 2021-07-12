import axios from "axios";
import { v4 as uuid } from "uuid";
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
      dispatch(setUser(response.data.accessToken));
    } catch (e) {
      console.log(e);
    }
  };
};

export const setUser = (payload) => {
  console.log(payload);
  return { type: SET_USER, payload };
};
