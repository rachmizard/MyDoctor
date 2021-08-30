import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducer';

const rootReducers = combineReducers({
  authReducer: authReducer,
});

export default rootReducers;
