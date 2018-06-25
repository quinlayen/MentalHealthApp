import { REGISTER_USER } from "../actions/index";
import { LOGIN_USER } from "../actions/index";
import { LOGOUT_USER } from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      console.log("IN THE REDUCER", action.payload.data);
      return { user: action.payload.data };
    case LOGIN_USER:
      console.log("IN THE REDUCER", action.payload.data);
      return { isLoggedIn: true, user: action.payload.data };
    case LOGOUT_USER:
      return { user: null };
    default:
      return state;
  }
};
