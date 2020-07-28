import { GET_POSTS } from '../../actions/fecthData';


export default (state = {}, action ) => {
    switch(action.type) {
        case GET_POSTS:
            return [...state, ]

        default:
            return[...state]
    }
}