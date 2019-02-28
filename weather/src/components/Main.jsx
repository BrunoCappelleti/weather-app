import React from 'react';
import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';

const Main = (props) => {
  return (
    <div id="main">
      <Header />
      <Weather focusedCity={props.focusedCity} />
      <Footer />
    </div>
  )
}

export default Main
