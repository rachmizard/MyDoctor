import {SET_SIGN_IN, SET_SIGN_OUT} from './auth.type';

const INITIAL_STATE = {
  auth: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SET_SIGN_IN) {
    return {
      auth: action.payload,
    };
  }
  if (action.type === SET_SIGN_OUT) {
    return {
      auth: {},
    };
  }

  return state;
};

export default authReducer;
