import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import fetchWeather from './services/fetchWeather';
import Welcome from './components/Welcome';
import Main from './components/Main';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formCity: '',
      cityList: {},
      focusedCity: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const city = await fetchWeather();
    this.setState({
      focusedCity: city,
    })
  }

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    })
  }

  async componentDidMount() {
    const weather = await fetchWeather();
    this.setState({
      focusedCity: weather,
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ () => (
          <Welcome
          formCity={this.state.formCity}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        )} />
        <Route path="/main" component={() => (
          <Main
          focusedCity={this.state.focusedCity} />
        )} />
      </div>
    );
  }
}

export default App;
