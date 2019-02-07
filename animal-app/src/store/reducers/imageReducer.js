import { FETCH_CAT, FETCH_DOG, FETCH_FOX } from '../actions/actions';

const initState = {
    cat: '',
    dog: '',
    fox: ''
}

const imageReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_CAT:
        return {
            ...state,
            cat: action.payload
        }
        case FETCH_DOG:
        return {
            ...state,
            dog: action.payload
        }
        case FETCH_FOX:
        return {
            ...state,
            fox: action.payload
        }
        default: 
        return state;
    }
}

export default imageReducer;