import { FETCH_POSTS, POST_POSTS } from '../actions/actions';

const initState = {
    posts: [],
    post: {},
}

const postReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_POSTS:
        return {
            ...state,
            posts: action.payload
        }
        case POST_POSTS:
        return {
            ...state,
            posts: [action.payload, ...state.posts]
        }
        default:
        return state;
    }
}

export default postReducer;