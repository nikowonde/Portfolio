import { FETCH_CAT, FETCH_DOG, FETCH_FOX } from './actions';
import Axios from 'axios';

export const fetchCat = () => {
    return dispatch => {
        Axios.get('http://aws.random.cat/meow')
        .then((res) => {
            console.log(res.data.file)
            dispatch({
            type: FETCH_CAT,
            payload: res.data.file
            })
        })
        .catch((err) => console.log(err))
    }
}

export const fetchDog = () => {
    return dispatch => {
        Axios.get('https://random.dog/woof.json')
        .then((res) => {
            console.log(res.data.url)
            dispatch({
                type: FETCH_DOG,
                payload: res.data.url
            })
        })
        .catch((err) => console.log(err))
    }
}

export const fetchFox = () => {
    return dispatch => {
        Axios.get('https://randomfox.ca/floof/')
        .then((res) => {
            console.log(res.data.image)
            dispatch({
                type: FETCH_FOX,
                payload: res.data.image
            })
        })
        .catch((err) => console.log(err))
    }
}