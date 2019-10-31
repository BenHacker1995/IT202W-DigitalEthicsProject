import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class Header extends Component {
  render() {
    return(
      <div className="instructions">
          <h1 className="lead">Team Singularity</h1>
          <NavBar history={this.props.history}/>
      </div>
    )
  }
}

export default Header;