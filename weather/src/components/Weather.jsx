import React from 'react';
import Current from './Current'
import Forecast from './Forecast'

const Weather = (props) => {
  if(props.focusedCity !== null){
    return (
      <div id="weather">
        <Current
        focusedCity={props.focusedCity} />
        <Forecast
        focusedCity={props.focusedCity} />
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default Weather
