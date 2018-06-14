import { FETCH_DOCTORS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    // case FETCH_DOCTOR:
    //   const doctor = action.payload.data;
    //   const newState = [...state];
    //   newState[doctor.id] = doctor;
    //   return newState;
    // return {
    //   ...state,
    //   [action.payload.data.id]: action.payload.data
    // };
    case FETCH_DOCTORS:
      console.log('action in the reducer', action.payload.data);
      return action.payload.data;
  }
  return state;
}
