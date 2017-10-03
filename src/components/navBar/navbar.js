import React, { Component } from 'react';
import Logo from '../../images/CookLogo.png';

export default class NavBar extends Component {
  render() {
    return(
    <div className='navbarSection'>
      <div className='navbar'>
        <div className='navbarLogo'>
          <img src={Logo} alt="Logo" id='logo'/>
        </div>
      </div>
    </div>
  )}
}
