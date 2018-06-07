import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const TELL_TWILIO = 'TELL_TWILIO'

const HOST = "http://localhost:8080";

export function toggleAction(open) {
  //console.log('open in toggleAction creator', open);

  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(info) {
  const response = axios.get(`${HOST}/doctors`, info);
  console.log("in action creator", response);
  return {
    type: FETCH_DOCTORS,
    payload: response
  };
}

export function tellTwilio(medium) {
  
  switch (medium.value) {
    case "sms":
    let request = axios({
      method:"POST",
    url: `${HOST}/api/send`,
    headers:[]
    });
      // const toSend = axios.post(`${HOST}/api/send`, {recipient, message});
  request.then(res => {
      console.log(res, "twilio ping");
      return {
        type: TELL_TWILIO,
        payload: res
      }
  })
  
      break;

      // case web:
      // break;

      // case email:
      // break;

      // case call:
      // break;
  
    default:
      break;
}
}
  

