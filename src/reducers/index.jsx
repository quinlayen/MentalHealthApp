import {combineReducers} from 'redux';
import NavControlsReducer from '.reducer_navControls';

const rootReducer = combineReducers({
    drawer: NavControlsReducer
})

export default rootReducer;