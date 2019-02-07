import React from 'react';
import FormCSS from './form.module.css'
import {connect} from 'react-redux';
import { postPosts } from '../store/actions/postActions';

const Form = (props) => {
    /*let test = (event) => {
        event.preventDefault();
        console.log(event)
        props.postPosts();
    }*/

    return (
        <div>
            <h3>Form</h3>
            Title:<br /> <input className={FormCSS.formTitle} label='title' id='title' onChange={handleTitleInput} placeholder='Give your post a title' /> <br />
            Post:<br /> <textarea className={FormCSS.formText} label='body' id='body' rows='5' onChange={handleBodyInput} placeholder='Enter your post here'/> <br />
            <button className={FormCSS.formButton} id='submit' type='submit' onClick={() => props.postPosts(tmpBody,tmpTitle)}>Submit</button>
        </div>
    );
}

let tmpTitle = null;
const handleTitleInput = (event) => {
    tmpTitle = event.target.value
}

let tmpBody = null;
const handleBodyInput = (event) => {
    tmpBody = event.target.value
}

export default connect(null, { postPosts })(Form);


/*
Axios.post('https://jsonplaceholder.typicode.com/posts', {
        UserId: 12,
        title: 'Some title',
        body: 'this is some kind of body
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
*/