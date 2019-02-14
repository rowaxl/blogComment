import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReduces from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReduces
});