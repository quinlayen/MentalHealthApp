import { REGISTER_USER } from "../actions/index";
import { LOGIN_USER } from "../actions/index";
import { LOGOUT_USER } from "../actions/index";

// const initialState = {

//   user: []
// };

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      console.log("USERS", action.payload.data);
      // return { ...state, users: action.payload };
      return action.payload.data;
    case LOGIN_USER:
      console.log("USER", action.payload.data);
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
