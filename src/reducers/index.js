import { combineReducers } from 'redux';
import Oauth from './authStatus';
import ListPosts from './listproducts';
import PostUser from './postsUser';

export default combineReducers({
    auth: Oauth,
    listposts: ListPosts,
    postUser: PostUser
})