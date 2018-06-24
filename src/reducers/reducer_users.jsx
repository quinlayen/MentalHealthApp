import { REGISTER_USER } from "../actions/index";
import { LOGIN_USER } from "../actions/index";
import { LOGOUT_USER } from "../actions/index";



export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      //console.log("USERS", action.payload.data);
      // return { ...state, users: action.payload };
      return action.payload.data;
    case LOGIN_USER:
      //console.log("USER", action.payload.data);
      return { isLoggedIn:true, user:action.payload.data}
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
