import axios from 'axios';

export const TOGGLE_ACTION = 'TOGGLE_ACTION ';

export function toggleAction(open) {
  console.log('open in toggleAction creator', open  );

  return {
    type: TOGGLE_ACTION,
    payload: open
  };
}
