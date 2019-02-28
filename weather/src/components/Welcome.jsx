import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => (
  <div className="welcome-page">
    <h1>Weather App</h1>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        id="city-search"
        name="formCity"
        value={props.formCity}
        onChange={props.handleChange} />
      <button
      type="submit">
        <Link to="/main">Get Weather</Link>
      </button>
    </form>
  </div>
);

export default Welcome;
