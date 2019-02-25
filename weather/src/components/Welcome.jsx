import React from 'react';

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
      <input
        type="submit" />
    </form>
  </div>
);

export default Welcome;
