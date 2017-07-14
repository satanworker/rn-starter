import { combineReducers } from 'redux';
import user from './user/user.reducer';
import nav from './nav/nav.reducer';

export default combineReducers({
  user,
  nav,
});
