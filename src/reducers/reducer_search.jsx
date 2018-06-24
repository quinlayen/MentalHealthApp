import { FETCH_DOCTORS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DOCTORS:
      //console.log('action in the reducer', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
  // return state;
}
