import { GET_DETAILS } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_DETAILS:
      const doctor = action.payload.data;
      const newState = [...state];
      newState[doctor.id] = doctor;
      return newState;
    // return {
    //   ...state,
    //   [action.payload.data.provider_id]: action.payload.data
    // };
  }
  return state;
}
