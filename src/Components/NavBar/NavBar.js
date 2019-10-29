import React, { Component } from 'react';
import NavBarSection1 from './NavBarSection1';


class NavBar extends Component {

  render() {


    return (
      <div>
        <NavBarSection1 overview={() => this.props.history.push('/overview')}
            economic={() => this.props.history.push('/economic')}
            safety={() => this.props.history.push('/safety')}/>
      </div>
    );
  }
}

export default NavBar;