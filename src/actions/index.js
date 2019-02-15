import { uniq, map } from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholders';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUsers = id =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
}

export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = uniq(map(getState().posts, 'userId'));
    
    Promise.all(userIds.map(id => dispatch(fetchUsers(id))));
}