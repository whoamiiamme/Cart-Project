import { 
    GET_POST_AD,
    PUT_POST_AD,
    POST_POST_AD,
    DEL_POST_AD } from './../actions/types';


export default (state = [], action ) => {

    switch(action.type){
        case GET_POST_AD:
            state = action.payload;
            return state;
        case POST_POST_AD:
            return [...state, action.payload];
        case DEL_POST_AD:
            return state.filter(post => post.id !== action.payload )
        default:
            return [...state]
    }
}