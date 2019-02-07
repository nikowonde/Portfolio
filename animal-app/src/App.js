import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header';
import CatsPage from './components/catsPage';
import DogsPage from './components/dogsPage';
import FoxesPage from './components/foxesPage';

import { fetchFox, fetchCat, fetchDog } from './store/actions/imageActions';

class App extends Component {

  componentDidMount(){
    /*this.getNewCat()
    this.getNewDog()
    this.getNewFox()*/
    //mapDispatchToProps()
    this.props.fetchCat()
    this.props.fetchDog()
    this.props.fetchFox()
    console.log('Comp did mount')
  }

  state={
    cat: '',
    dog: '',
    fox: '',
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <div className='Container'>
              <Route path='/cat' exact render={() => {
                return cat();
              }} />
              <Route path='/dog' exact render={() => {
                return dog();
              }} />
              <Route path='/fox' exact render={() => {
                return fox();
              }} />
              </div>
        </div>
      </BrowserRouter>
    );
  }
/*
getNewCat = () => {
    Axios.get('http://aws.random.cat/meow')
    .then((response) => {
        this.setState({
          cat: response.data.file
        })
    })
    .catch((err) => console.log(err));
  }

  getNewDog = () => {
    Axios.get('https://random.dog/woof.json')
    .then((response) => {
      this.setState({
        dog: response.data.url
      })
    })
    .catch((err) => console.log(err));
  }

  getNewFox = () => {
    Axios.get('https://some-random-api.ml/foximg')
    .then((response) => {
      this.setState({
        fox: response.data
      })
    })
    .catch((err) => console.log(err));
  }
  */
}

/*const mapDispatchToProps = dispatch => {
  Axios.get('http://aws.random.cat/meow')
  .then((response) => {
         dispatch({type: 'GET_NEW_CAT', cat: response.data.file})
  })
  .catch((err) => console.log(err));
  Axios.get('https://random.dog/woof.json')
  .then((response) => {
    dispatch({type: 'GET_NEW_DOG', dog: response.data.url})
  })
  .catch((err) => console.log(err));
  Axios.get('https://some-random-api.ml/foximg')
      .then((response) => {
        dispatch({type: 'GET_NEW_FOX', fox: response.data})
      })
      .catch((err) => console.log(err));
}
*/
const cat = () => {
  return (
    <CatsPage 
    
    />
  )
}

const dog = () => {
  return (
    <DogsPage 
    
    />
  )
}

const fox = () => {
  return (
    <FoxesPage 
    
    />
  )
}

export default connect(null, { fetchFox, fetchCat, fetchDog })(App);
