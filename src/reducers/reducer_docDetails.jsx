import { GET_DETAILS } from "../actions/index";

// const initialState = {
//   activeDoctor: {}
// };

export default function(state = {}, action) {
  switch (action.type) {
    case GET_DETAILS:
      console.log("details in the reducer", action.payload);
      return action.payload;
  }
  return state;
}
