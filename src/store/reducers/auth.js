import {AsyncStorage} from 'react-native';
import {LOGIN_SUCCESS, LOGIN_FAIL} from '../actions';

const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_FAIL:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};