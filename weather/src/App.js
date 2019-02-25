import React, { Component } from 'react';
import './App.css';
import fetchWeather from './services/fetchWeather'
import Welcome from './components/Welcome'

class App extends Component {
  constructor(){
    super();
    this.state = {
      formCity: '',
      cityList: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(ev){
    ev.preventDefault();
    const city = await fetchWeather(this.state.formCity);
    console.log(city);
  }

  handleChange(ev){
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    })
  }

  async componentDidMount(){
    const weather = await fetchWeather('11217');
    console.log(weather);
  }

  render() {
    return (
      <div className="App">
        <Welcome
        formCity={this.state.formCity}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
