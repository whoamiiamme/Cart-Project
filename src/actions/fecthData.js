import {GET_POSTS,
    POST_POST,
    PUT_POST,
    DEL_POST,
    GET_POST_AD,
    PUT_POST_AD,
    POST_POST_AD,
    DEL_POST_AD } from './types';
import callApi from './../callData/callApi';



export const fetchGetAdmin = () => async dispatch => {
    await callApi.get('/fsusers')
    .then(res => {
           dispatch({
            type: GET_POST_AD,
            payload: res.data
           })
    })
}

export const fetchGet = () => async dispatch => {
    await callApi.get('/posts')
    .then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    })

}


export const fetchPostAdmin =  data => async dispatch => {
    await callApi.post('/fsusers',data).then(res =>{
        dispatch(fetchPost(res.data),
        {
            type: POST_POST_AD,
            payload: res.data
        });
    })
}

export const fetchPost = (data) => async dispatch => {
    await callApi.post('/posts',data)
    .then(res => {
        dispatch({
            type: POST_POST,
            payload: res.data
        })
    })

}

export const fetchDelAdmin = id => async dispatch => {
    await callApi.delete(`/fsusers/${id}`)
    .then(() => {
        dispatch(fetchDel(id),
        {
            type: DEL_POST_AD,
            payload: id
        });

    })

}

export const fetchDel = id => async dispatch => {
     await callApi.delete(`/posts/${id}`)
     .then(() => {
        dispatch({
            type: DEL_POST,
            payload: id
         })
     })
}

export const fetchEditAdmin = post => async dispatch => {
    console.log(post)

    await callApi.put(`/fsusers/${post.id}`,post)
    .then(res => {
        dispatch(fetchEdit(res.data)
        ,{
            type: PUT_POST_AD,
            payload: res.data
         }
        )

     })
}

export const fetchEdit = post => async dispatch => {
    await callApi.put(`/posts/${post.id}`,post)
    .then(res => {
        dispatch({
            type: PUT_POST,
            payload: res.data
        })
    })
}