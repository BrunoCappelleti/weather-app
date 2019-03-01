import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      search: false
    }
    this.openForm = this.openForm.bind(this);
  }

  openForm(ev){
    ev.preventDefault();
    this.setState((prevState) => ({
      search: !prevState.search
    }))
  }

  render(){
    return (
      <div id="header">
        <div>Menu</div>
        <div>My Weather App</div>
        <div onClick={this.openForm}>{this.state.search ? '=' : '+'}</div>
      </div>
    )
  }
}

export default Header
