import React, { Component } from 'react';
//import Axios from 'axios';
import {connect} from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';

class Posts extends Component {
    /*state = {
        posts: [],
    }*/

   /* componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
        .catch((err) => console.log(err))
    }*/
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts.map(el => (
            <div key={el.id}>
                <h5>{el.title}</h5>
                <p>{el.body}</p>
            </div>
        ))
        return (
            <div>
                <h3>Posts</h3>
                {posts}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        post: state.posts.post
    }
}


export default connect(mapStateToProps, { fetchPosts })(Posts);