import { combineReducers } from "redux";
import NavControlsReducer from "./reducer_navControls";
import DoctorsReducer from "./reducer_search";
import DoctorDetails from "./reducer_docDetails";
import UsersReducer from "./reducer_users";
import TwilioReducer from "./reducer_twilio";

const rootReducer = combineReducers({
  drawer: NavControlsReducer,
  doctors: DoctorsReducer,
  details: DoctorDetails,
  users: UsersReducer,
  twilio: TwilioReducer
});

export default rootReducer;
