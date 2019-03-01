import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js'
import { getTime } from '../services/moment'

ReactChartkick.addAdapter(Chart);

class Current extends Component {
  constructor(){
    super();
    this.state = {
      showMore: false
    };
    this.expandCurrent = this.expandCurrent.bind(this);
  }

  expandCurrent(ev){
    ev.preventDefault();
    this.setState((prevState) => ({
      showMore: !prevState.showMore
    }))
  }

  render() {
    const current = this.props.focusedCity.currently;
    const day = this.props.focusedCity.daily.data[0];
    const week = this.props.focusedCity.daily
    const data = {}
    const hours = this.props.focusedCity.hourly.data.slice(0, 24)

    for (let i = 0; i < hours.length; i++){
      data[getTime(hours[i].time)]= hours[i].temperature
    }

    return (
      <div id="current">
        <div className="current-name">New York, NY</div>
        <div className="current-icon">{current.icon}</div>
        <div className="current-temp">{Math.round(current.temperature)}&deg;</div>
        <div className="current-realfeel">Feels like: {Math.round(current.apparentTemperature)}&deg;</div>
        <div className="current-footer">
          <div className="current-summary-today">Today: {day.summary}</div>
          <div className="currently-summary-week">This week: {week.summary}</div>
          <div
            onClick={this.expandCurrent}
            className="current-show-more">
            {this.state.showMore ? 'Show less' : 'Show more'}
          </div>
        </div>
        {this.state.showMore &&
          <div className="current-extras">
            <LineChart data={data} />
          </div>
        }
      </div>
    )
  }
}

export default Current
