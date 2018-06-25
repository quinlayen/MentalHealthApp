import { TOGGLE_ACTION } from "../actions/index";

export default function(state = {}, action) {
  //console.log('action in reducer: ', action)
  switch (action.type) {
    case TOGGLE_ACTION:
      //console.log('state in reducer', state);
      //console.log('action.payload', action.payload);
      const newState = { ...state, left: action.payload };
      //console.log('new state in reducer', newState);
      return newState;
    default:
      return state;
  }
  // return state;
}
