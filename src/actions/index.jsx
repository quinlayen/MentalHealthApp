import axios from 'axios';

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export function toggleDrawer(side, open){
    console.log('toggle button pressed')

    return {
        type: TOGGLE_DRAWER,
        payload: {
            side,
            open,
        }
    }
}