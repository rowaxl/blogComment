import { memoize } from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholders';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUsers = id =>  dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});