import axios from 'axios';
// import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user's profile
export const getCurrentProfile = () => async (dispatch: any) => {
  try {
    const res = await axios.get('/api/v1/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};