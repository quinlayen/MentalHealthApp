import axios from 'axios';

export const TOGGLE_ACTION = 'TOGGLE_ACTION ';
export const FETCH_DOCTORS = 'FETCH_DOCTORS';

export function toggleAction(open) {
  console.log('open in toggleAction creator', open);

  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(location, type) {
  const req = axios.get('http://localhost:8080');
  return {
    type: FETCH_DOCTORS,
    payload: req
  };
}
