import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Secondpage from './components/secondpage';
import Thirdpage from './components/thirdpage';

import axios from 'axios';
import './App.css';

const API_KEY = '11dfe05ee22ecccbec93ad393dab9a2b';

class App extends Component {

state={
  params: {
    appid: API_KEY,
    q: 'Oulu',
    units: 'metric'
  },
  forecastData: [],
  data: null,
  params2: {
    appid: API_KEY,
    q: 'Tampere',
    units: 'metric'
  },
  city: '',
  cityData: null,
  value: 0,
  params3: {
    appid: API_KEY,
    q: 'Oulu',
    units: 'metric'
  },
  city1: '',
  city2: '',
  cities1: null,
  cities2: null,
}

  componentDidMount(){
    this.forecastCall(this.state.params);
  }

  componentWillMount(){
    if (sessionStorage.getItem('value') === null) {
      sessionStorage.setItem('value', this.state.value);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' exact render={() => {
            return homePage(this.state.forecastData, this.state.data);
          }}/>
          <Route path='/2ndPage' exact render={() => {
            return secondPage(this.cityInputChange, this.handleInputSubmission, this.state.cityData);
          }} />
          <Route path='/3rdPage' exact render={() =>{
            return thirdPage(this.citiesInputChange1, this.citiesInputChange2, this.weatherCompare1, this.state.cities1, this.state.cities2, this.state.city1, this.state.city2);
          }} />
        </div>
      </BrowserRouter>
    );
  }
  forecastCall = () => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?', {params: this.state.params})
    .then(response => {
      this.setState({
        forecastData: response.data.list,
        data: response.data
      })
    })
    .catch(err => console.log(err));
  }
  cityInputChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleInputSubmission = () => {
    const params = Object.assign({}, this.state.params2)
    params.q = this.state.city;
    this.weatherCall(params)
  }
  weatherCall = (parameters) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?', {params: parameters})
    .then(response => {
      this.setState({
        cityData: response.data
      })
      console.log(response.data)
    })
    .catch(err => console.log(err));
  }

  citiesInputChange1 = (event) => {
    this.setState({
      city1: event.target.value
    })
  }
  citiesInputChange2 = (event) => {
    this.setState({
      city2: event.target.value
    })
  }
  
  weatherCompare1 = () => {
    const params = this.state.params3;
    params.q = this.state.city1;
    axios.get('http://api.openweathermap.org/data/2.5/weather?', {params: params})
    .then(response => {
      this.setState({
        cities1: response.data
      })
      console.log(response.data)
    })
    .then(()=> {
        params.q = this.state.city2;
        axios.get('http://api.openweathermap.org/data/2.5/weather?', {params: params})
        .then((response) => {
          this.setState({
            cities2: response.data
          })
        }).catch((err) => console.log(err));
    })
    .catch(err => console.log(err));
  }

}

  const homePage = (forecastData, data) => {
      return (
      <Homepage
        forecastData={forecastData}
        data={data}

      />
      )
  };

  const secondPage = (cityInputChange, handleInputSubmission, cityData) => {
    return (
      <Secondpage 
      cityInput={cityInputChange}
      handleInputSubmission={handleInputSubmission}
      cityData={cityData}
      />
    )
  };

  const thirdPage = (cities1, cities2, weatherCompare1, citiesInputChange1, citiesInputChange2, city1, city2) => {
    return (
      <Thirdpage 
      cities1={cities1}
      cities2={cities2}
      weatherCompare1={weatherCompare1}
      citiesInputChange1={citiesInputChange1}
      citiesInputChange2={citiesInputChange2}
      city1={city1}
      city2={city2}
      />
    )
  };

export default App;
