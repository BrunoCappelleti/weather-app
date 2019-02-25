import React, { Component } from 'react';
import './App.css';
import fetchWeather from './services/fetchWeather'

class App extends Component {

  async componentDidMount(){
    const weather = await fetchWeather();
    console.log(weather);
  }

  render() {
    return (
      <div className="App">
        <h1>HELLO THERE!</h1>
      </div>
    );
  }
}

export default App;
