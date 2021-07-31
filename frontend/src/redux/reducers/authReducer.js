import * as types from "../types/authTypes";
//JWT
const initialState = {
  user: null,
  token: null
};
export default function authReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
        //token: action.payload.accessToken
      };
    default:
      return state;
  }
}
