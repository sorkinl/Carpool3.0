import * as types from "../types/authTypes";

const initialState = {
  user: null,
};
export default function authReducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
