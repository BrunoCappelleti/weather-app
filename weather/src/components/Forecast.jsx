import React, { Component } from 'react';

class Forecast extends Component {
  constructor(){
    super();
    this.state = {
      showDays: 5,
      showMore: null
    }
    this.expandForecast = this.expandForecast.bind(this);
  }

  expandForecast(idx) {
    this.setState((prevState) =>({
      showMore: (idx === prevState.showMore) ? null : idx
    }))
  }

  render() {
    const days = this.props.focusedCity.daily.data

    return (
      <div className="forecast">
        {days.slice(1, this.state.showDays).map((el, idx) => (
          <div className="day" key={idx}>
            <div className="day-base-data">
              <div className="day-name">{idx}</div>
              <div className="day-icon">{el.icon}</div>
              <div className="forecast-high-low">
                <div className="forecast-high">{Math.round(el.temperatureHigh)}</div>
                <div className="forecast-low">{Math.round(el.temperatureLow)}</div>
                <div
                  className="forecast-show-more"
                  onClick={(ev)=> {
                    ev.preventDefault();
                    this.expandForecast(idx)}
                    }>Show more</div>
                </div>
            </div>
            <div className="day-extended-data">
              {this.state.showMore === idx &&
                <div>HELLO</div>
              }
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Forecast
