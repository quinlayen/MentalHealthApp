import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";

const HOST = "http://localhost:8080";

export function toggleAction(open) {
  //console.log('open in toggleAction creator', open);

  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(info) {
  const response = axios.get(`${HOST}/doctors/result`, info);
  console.log("in action creator", response);
  return {
    type: FETCH_DOCTORS,
    payload: response
  };
}
