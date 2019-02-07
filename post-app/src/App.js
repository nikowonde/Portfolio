import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import Posts from './components/posts';
import Form from './components/form';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Form />
        <hr />
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.posts.posts
  }
}

export default connect(mapStateToProps)(App);
