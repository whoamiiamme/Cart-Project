import { GET_POSTS,
    POST_POST,
    PUT_POST,
    DEL_POST} from './../actions/types';



    export default (state = [], action ) => {
        switch(action.type){
            case POST_POST:
                return [...state, action.payload];
            case GET_POSTS:
                state = action.payload;
                return [...state]
            case DEL_POST:
                return state.filter(post => post.id !== action.payload)
            default:
                return [...state]
        }
    }