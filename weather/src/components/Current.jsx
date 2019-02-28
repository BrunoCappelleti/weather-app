import React, { Component } from 'react'

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

    return (
      <div className="current">
        <div>{this.props.focusedCity.timezone}</div>
        <div>{day.icon}</div>
        <div>{Math.round(current.temperature)}</div>
        <div>Feels like: {Math.round(current.apparentTemperature)}</div>
        <div className="current-footer">
          <div className="current-summary">{day.summary}</div>
          <div onClick={this.expandCurrent} className="current-show-more">Show more</div>
        </div>
        {this.state.showMore &&
          <div className="current-extras">
            <div>HELLO</div>
          </div>
        }
      </div>
    )
  }
}

export default Current
