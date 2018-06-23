import { REGISTER_USER } from "../actions/index";
import { LOGIN_USER } from "../actions/index";
import { LOGOUT_USER } from "../actions/index";

// const initialState = {

//   user: []
// };

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload.data
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
