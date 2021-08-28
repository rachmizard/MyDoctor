import {SET_SIGN_IN, SET_SIGN_OUT, SET_UPDATE_USER} from './auth.type';

const INITIAL_STATE = {
  auth: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SIGN_IN: {
      return {
        auth: action.payload,
      };
    }

    case SET_SIGN_OUT: {
      return {
        auth: {},
      };
    }

    case SET_UPDATE_USER: {
      return {
        ...state,
        auth: {
          ...state.auth,
          ...action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
