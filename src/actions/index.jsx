import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const TELL_TWILIO = 'TELL_TWILIO'

const HOST = "http://localhost:8080";

export function toggleAction(open) {
  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(info) {
  const response = axios.post(`${HOST}/doctors/result`, info);

  return {
    type: FETCH_DOCTORS,
    payload: response
  };
}

export function itemsIsLoading(bool){
  return{
    type: 'ITEMS_LOADING',
    isLoading: bool
  }
}
export function twilioSuccess(bool) {
  return {
    type: 'TWILIO_SUCCESS',
    isSuccess: bool
  }
}

export function tellTwilio(medium) {
  return (dispatch) => {
  switch (medium.medium) {
    
    case "sms":

  let smsRequest = axios.post(`${HOST}/api/sms`, {     recipient: medium.recipient,
     message:medium.message })
    console.log(medium.recipient,medium.message ,'in action')
    // console.log (request.data, 'is req')
 
  smsRequest.then(res => {
    dispatch(twilioSuccess(true));
      console.log(res, "is going to twilio");
      return {
     
        type: TELL_TWILIO,
        payload: res
      }
  }).catch(err => {
    dispatch(twilioSuccess(false));
    console.log(err)
  })
  
      break;

      // case web:
      // break;

      // case email:
      // break;

       case "call":
       let callRequest = axios.post(`${HOST}/api/call`, {recipient: medium.recipient})
     console.log(medium.recipient)
     callRequest.then(res => {
       dispatch(twilioSuccess(true));
       console.log(res, 'is going to twilio')
       return {
         type: TELL_TWILIO,
         payload: res
       }
     }).catch(err => {
       dispatch(twilioSuccess(false));
       console.log(err)
     })
      break;
  
    default:
      break;
  }
}
}
  

