import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducer';
import userReducer from './user/user.reducer';

const rootReducers = combineReducers({
  userReducer: userReducer,
  authReducer: authReducer,
});

export default rootReducers;
