import axios from 'axios';

export const DRAWER_TOGGLE_ACTION = 'DRAWER_TOGGLE_ACTION ';

export function drawerToggleAction(isOpen){
    console.log('toggle button pressed')

    return {
        type: DRAWER_TOGGLE_ACTION ,
        payload: isOpen
    }
}