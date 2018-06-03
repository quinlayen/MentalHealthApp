import { combineReducers } from 'redux';
import NavControlsReducer from './reducer_navControls';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  drawer: NavControlsReducer,
  form: formReducer
});

export default rootReducer;
