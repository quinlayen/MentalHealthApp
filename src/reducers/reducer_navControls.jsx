import { TOGGLE_ACTION } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case TOGGLE_ACTION:
      //console.log('state in reducer', state);
      //console.log('action.payload', action.payload);
      
      //console.log('new state in reducer', newState);
      return action.payload;
   
  }
   return state;
}
