import axios from "axios";

export const TOGGLE_ACTION = "TOGGLE_ACTION";
export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const GET_DETAILS = "GET_DETAILS";
export const TELL_TWILIO = "TELL_TWILIO";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

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

export function register(
  first_name,
  last_name,
  contact,
  username,
  password,
  newUser,
  redirectCallback
) {
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
}

export function loginAction(user, redirectCallback) {
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
}

export function logout() {
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
}

// export function login(username, password) {
//   return dispatch => {
//     dispatch(request({ username }));

//     userService.login(username, password).then(
//       user => {
//         dispatch(success(user));
//         history.push("/");
//       },
//       err => {
//         console.log({ err: err.message });
//       }
//     );
//   };
// }

// export function logout() {
//   userService.logout();
//   return { type: userConstants.LOGOUT };
// }

// export function register(user) {
//   return dispatch => {
//     dispatch(request(user));

//     userService.register(user).then(
//       user => {
//         dispatch(success());
//         history.push("/login");
//         dispatch(alertActions.success("Registration successful"));
//       },
//       err => {
//         console.log({ err: err.message });
//       }
//     );
//   };
// }

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_LOADING",
    isLoading: bool
  };
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
        //console.log(medium.recipient, medium.message, "in action");
        // console.log (request.data, 'is req')

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
