import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const GET_DETAILS = "GET_DETAILS";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TELL_TWILIO = "TELL_TWILIO";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const PUSH_NOTIFS = "PUSH_NOTIFS";

const HOST = "http://localhost:8080";

export function toggleAction(open) {
  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}

export function fetchDoctors(info) {
  const response = axios.post(`${HOST}/doctors`, info);

  return {
    type: FETCH_DOCTORS,
    payload: response
  };
}

export function getDetails(providerID) {
  return {
    type: GET_DETAILS,
    payload: providerID
  };
}

export function openModal() {
  console.log('modal button clicked open')
  return {
    type: OPEN_MODAL,
    payload: false
  };
}

export function closeModal() {
  console.log('modal button clicked closed')
  return {
    type: CLOSE_MODAL,
    payload: true
  };
}

export function registerAction(user) {
  const registeredUser = axios.post(`${HOST}/auth/register`, {
    first_name: user.first_name,
    last_name: user.last_name,
    method: user.method,
    contact: user.contact,
    username: user.username,
    password: user.password
  });

  return {
    type: REGISTER_USER,
    payload: registeredUser
  };
}

export function loginAction(user) {
  const loggedinUser = axios.post(`${HOST}/auth/login`, {
    username: user.username,
    password: user.password
  });
  return {
    type: LOGIN_USER,
    payload: loggedinUser
  };
}

export function logoutAction() {
  const loggedOutUser = axios.post(`${HOST}/auth/logout`);

  console.log("in the action", loggedOutUser);
  return {
    type: LOGOUT_USER,
    payload: loggedOutUser
  };

 
}

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_LOADING",
    isLoading: bool
  };
}

export function pushNotifs(bool) {
  console.log(process.env.VAPID_PUBLIC_KEY);
  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;

  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  navigator.serviceWorker.ready.then(registration => {
    if (!registration.pushManager) {
      alert("push unsupported");
      return;
    }
    console.log(registration, "in reg action");
    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationsServerKey: convertedVapidKey
      })
      .then(subscription => axios.post("/api/notifs", subscription))
      .catch(err => console.log(err));
  });

  return {
    type: PUSH_NOTIFS,
    pushNotif: bool
  };
}

export function twilioSuccess(bool) {
  return {
    type: "TWILIO_SUCCESS",
    isSuccess: bool
  };
}

export function tellTwilio(medium) {
  console.log("IN THE ACTION", medium);
  return dispatch => {
    switch (medium.method) {
      case "sms":
        let smsRequest = axios.post(`${HOST}/api/sms`, {
          contact: medium.contact
        });
        smsRequest
          .then(res => {
            dispatch(twilioSuccess(true));
            console.log(res, "is going to twilio");
            return {
              type: TELL_TWILIO,
              payload: res
            };
          })
          .catch(err => {
            dispatch(twilioSuccess(false));
            console.log(err);
          });

        break;

      case "call":
        let callRequest = axios.post(`${HOST}/api/call`, {
          contact: medium.contact
        });
        console.log("here!!!", medium.contact);
        callRequest
          .then(res => {
            console.log("got back res", res);
            dispatch(twilioSuccess(true));
            console.log(res, "is going to twilio");
            return {
              type: TELL_TWILIO,
              payload: res
            };
          })
          .catch(err => {
            console.log("the error: ", err);
            dispatch(twilioSuccess(false));
          });
        break;

      default:
        break;
    }
  };
}
