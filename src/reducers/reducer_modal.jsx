import { OPEN_MODAL, CLOSE_MODAL } from "../actions/index";



export default function(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {isHidden: action.payload}
      
    case CLOSE_MODAL:
      return {isHidden: action.payload}
     
     
    default:
      return state;
  }
}
