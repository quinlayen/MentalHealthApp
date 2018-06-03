import {combineReducers} from 'redux';
import NavControlsReducer from './reducer_navControls';
import DoctorsReducer from './reducer_search'

const rootReducer = combineReducers({
    drawer: NavControlsReducer,
    doctors: DoctorsReducer
})

export default rootReducer;