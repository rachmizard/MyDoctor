import {SET_SIGN_IN, SET_SIGN_OUT, SET_UPDATE_USER} from './auth.type';

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

export function updateUser(payload) {
  return {
    payload,
    type: SET_UPDATE_USER,
  };
}
