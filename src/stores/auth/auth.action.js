import {SET_SIGN_IN, SET_SIGN_OUT} from './auth.type';

export function setSignIn(payload) {
  return {
    payload,
    type: SET_SIGN_IN,
  };
}

export function setSignOut(payload) {
  return {
    payload,
    type: SET_SIGN_OUT,
  };
}
