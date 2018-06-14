import { combineReducers } from "redux";
import NavControlsReducer from "./reducer_navControls";
import DoctorsReducer from "./reducer_search";
import DoctorDetails from "./reducer_docDetails";
import TwilioReducer from "./reducer_twilio";

const rootReducer = combineReducers({
  drawer: NavControlsReducer,
  doctors: DoctorsReducer,
  details: DoctorDetails,
  twilio: TwilioReducer
});

export default rootReducer;
