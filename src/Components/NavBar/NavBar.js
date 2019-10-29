import React, { Component } from 'react';
import NavBarSection1 from './NavBarSection1';
import NavBarSection2 from './NavBarSection2';
import NavBarSection3 from './NavBarSection3';


class NavBar extends Component {

  render() {


    return (
      <div>
        <NavBarSection1/>
        <NavBarSection2/>
        <NavBarSection3/>
      </div>
    );
  }
}

export default NavBar;