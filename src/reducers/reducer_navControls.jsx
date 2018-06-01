import {TOGGLE_DRAWER} from '../actions/index';

export default function (state= null, action){
    switch (action.type){
        case TOGGLE_DRAWER:
            return [action.payload.data, ...state];
    }
    return state;
}