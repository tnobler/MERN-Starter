import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from './types';

interface IProps {
  name: any;
  email: any;
  password: any;
}

// Load User
export const loadUser = () => async (dispatch: any) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register/Signup User
export const signup = ({ name, email, password }: IProps) => async (
  dispatch: any
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/v1/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: { msg: any }) =>
        dispatch(setAlert(error.msg, 'danger'))
      );
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = ({ email, password }: IProps) => async (dispatch: any) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/v1/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: { msg: any }) =>
        dispatch(setAlert(error.msg, 'danger'))
      );
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile

export const logout = () => (dispatch: any) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
