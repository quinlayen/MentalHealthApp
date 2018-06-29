import { REGISTER_USER, GET_USER } from "../actions/index";
import { LOGIN_USER } from "../actions/index";
import { LOGOUT_USER } from "../actions/index";
// import { SET_USER } from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      console.log("IN THE REDUCER", action.payload.data);
      return { isLoggedIn: true, user: action.payload.data };
    case LOGIN_USER:
      console.log("IN THE REDUCER", action.payload.data);
      return { isLoggedIn: true, user: action.payload.data };
    case LOGOUT_USER:
      return { user: null };
    // case GET_USER:
    //   console.log("IN THE REDUCER", action.payload.data);
    //   return { isLoggedIn: true, user: action.payload.data };
    default:
      return state;
  }
};
