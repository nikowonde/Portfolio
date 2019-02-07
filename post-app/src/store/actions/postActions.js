import { FETCH_POSTS, POST_POSTS } from './actions';
import Axios from 'axios';
//import { tmpBody, tmpTitle } from '../../components/form';


export const fetchPosts = () => {
    return dispatch => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res)
            dispatch({
                type: FETCH_POSTS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err))
    }
}

export const postPosts = (tmpBody,tmpTitle) => {
    return dispatch => {
        Axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            userId: Math.floor(Math.random()*10) + 1,
            id: Math.floor(Math.random()*10000),
            title: tmpTitle,
            body: tmpBody
        })
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: POST_POSTS,
                payload: res.data
            })
        })
        .then(document.getElementById('title').value=null)
        .then(document.getElementById('body').value=null)
        .catch((err) => console.log(err))
    }
}