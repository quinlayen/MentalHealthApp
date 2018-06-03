import axios from 'axios';
import { mapPropsStreamWithConfig } from 'recompose';

export const TOGGLE_ACTION = 'TOGGLE_ACTION ';
export const FETCH_DOCTORS = 'FETCH_DOCTORS';

export function toggleAction(open) {
  console.log('open in toggleAction creator', open);

  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(props) {
  const req = axios.get('http://localhost:8080', props);
  //console.log('in action creator', props)
  return {
    type: FETCH_DOCTORS,
    payload: req
  };
}
