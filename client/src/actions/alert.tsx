import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg: any, alertType: any, timeout = 5000) => (
  dispatch: (arg0: {
    type: string;
    payload: string | { msg: any; alertType: any; id: string };
  }) => void
) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
