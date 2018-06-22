import {PUSH_NOTIFS} from '../actions/index';

export default function(state = {}, action) {
  console.log('action', action)
  switch (action.type) {
    case PUSH_NOTIFS:
      console.log("details in the reducer", action.payload);
      const newState = { ...state, message: action.payload};
      return newState;
      default:
      break;
  }
  return state;
}