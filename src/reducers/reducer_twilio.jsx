import {TELL_TWILIO} from '../actions/index';

export default function(state={}, action) {
    switch(action.type) {
        case TELL_TWILIO:
        console.log(action.payload, 'action.payload')
        const newState = { ...state, message: action.payload};
        console.log('in reducer', newState);
        return newState;
    }
    return state;
}