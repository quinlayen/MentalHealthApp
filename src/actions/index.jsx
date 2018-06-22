import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const GET_DETAILS = "GET_DETAILS";
export const TELL_TWILIO = "TELL_TWILIO";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const PUSH_NOTIFS = 'PUSH_NOTIFS';

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

export const register = (
  first_name,
  last_name,
  contact,
  username,
  password,
  newUser,
  redirectCallback
) => {
  return dispatch => {
    return axios
      .post(`${HOST}/auth/register`, {
        first_name,
        last_name,
        contact,
        username,
        password
      })
      .then(newUser => {
        dispatch({
          type: REGISTER_USER,
          users: newUser
        });
        redirectCallback();
      })
      .catch(err => {
        console.log({ err: err.message });
      });
  };
};

export const login = (user, redirectCallback) => {
  return dispatch => {
    return axios
      .post(`${HOST}/auth/login`, {
        username: user.username,
        password: user.password
      })
      .then(loginInfo => {
        localStorage.setItem("id", loginInfo.data.client_id);
        console.log("length", localStorage.length);
        dispatch({
          type: LOGIN_USER,
          payload: loginInfo
        });
        redirectCallback();
      })
      .catch(err => {
        console.log({ err: err.message });
      });
  };
};

export const logout = () => {
  localStorage.clear();
  return dispatch => {
    return fetch(`${HOST}/auth/logout`)
      .then(logout => {
        dispatch({
          type: LOGOUT_USER,
          payload: logout
        });
      })
      .catch(err => {
        console.log({ err: err.message });
      });
  };
};

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_LOADING",
    isLoading: bool
  };
}

export function pushNotifs(message) {

  const vapidPublicKey= 'BBu87OF65cmp6KOqf_bayXewo7j-tiOuuzb3wmeAl3eHTVDt4hfd4t89vf07TJCg-BvAUOP2dV_pDQyc3Da3kaU'

 const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
//converting public Vapid Key
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  
  }
  return outputArray
}

  navigator.serviceWorker.ready.then(registration => {
    if (!registration.pushManager) {
      alert ('push unsupported')
      return
    }
    console.log(registration, 'in reg action')

    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationsServerKey: convertedVapidKey
    }).then(subscription => 
      axios.post('/api/notifs', subscription)).catch(err => console.log(err))
  })

return {
  type: PUSH_NOTIFS,
  pushNotif: message
}
}

export function twilioSuccess(bool) {
  return {
    type: "TWILIO_SUCCESS",
    isSuccess: bool
  };
}

export function tellTwilio(medium) {
  return dispatch => {
    switch (medium.medium) {
      case "sms":
        let smsRequest = axios.post(`${HOST}/api/sms`, {
          recipient: medium.recipient,
          message: medium.message
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

      // case web:
      // break;

      // case email:
      // break;

      case "call":
        let callRequest = axios.post(`${HOST}/api/call`, {
          recipient: medium.recipient
        });
        console.log("here!!!", medium.recipient);
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
