import React, { Component } from 'react';
import { getDay, getTime } from '../services/moment.js'

class Forecast extends Component {
  constructor(){
    super();
    this.state = {
      showDays: 5,
      showMore: null
    }
    this.expandDay = this.expandDay.bind(this);
    this.expandForecast = this.expandForecast.bind(this);
  }

  expandDay(idx) {
    this.setState((prevState) => ({
      showMore: (idx === prevState.showMore) ? null : idx
    }))
  }

  expandForecast() {
    this.setState((prevState) => ({
      showDays: (prevState.showDays === 5) ? 8 : 5
    }))
  }

  render() {
    const days = this.props.focusedCity.daily.data

    return (
      <div id="forecast">
        <div className="forecast-header">Forecast</div>
        {days.slice(1, this.state.showDays).map((el, idx) => (
          <div className="day" key={idx}>
            <div className="day-base-data">
              <div className="day-name">{getDay(el.sunriseTime)}</div>
              <div className="day-icon">{el.icon}</div>
              <div className="day-high-low">
                <div className="day-high">&uarr;{Math.round(el.temperatureHigh)}&deg;</div>
                <div className="day-low">&darr;{Math.round(el.temperatureLow)}&deg;</div>
                <div
                  className="day-show-more"
                  onClick={(ev)=> {
                    ev.preventDefault();
                    this.expandDay(idx)}
                  }>{idx === this.state.showMore ? '-' : '+'}</div>
                </div>
            </div>
            <div className="day-extended-data">
              {this.state.showMore === idx &&
                <div className="extended-data">
                  <div className="day-summary">{el.summary}</div>
                  <div className="day-prop">There is a {el.precipProbability * 100}% chance of {el.precipType}</div>
                  <div className="day-sunrise-sunset">Sunrise: {getTime(el.sunriseTime)}<br/>Sunset: {getTime(el.sunsetTime)}</div>
                </div>
              }
            </div>
          </div>
        ))}
        <div className="forecast-footer">
          <div
          className="forecast-toggle"
          onClick={this.expandForecast}>
            {this.state.showDays === 5 ? 'Show 7 day forecast' : 'Show 5 day forecast'}
          </div>
        </div>
      </div>
    )
  }
}

export default Forecast
