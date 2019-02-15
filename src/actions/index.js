import { chain } from 'lodash';
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

    chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUsers(id)))
        .value();
}