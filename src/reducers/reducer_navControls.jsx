import { DRAWER_TOGGLE_ACTION } from '../actions/index';

export default function (state = {}, action){
    //console.log('action in reducer', action)
    switch (action.type){
        case DRAWER_TOGGLE_ACTION :
        //console.log('state', state)
        //console.log('action.payload', action.payload)
        const newState = {drawer: action.payload, ...state}
        //console.log('newState', newState)
            return newState;
    }
    return state;
}