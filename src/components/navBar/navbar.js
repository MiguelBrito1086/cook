import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/CookLogo.png';

export default class NavBar extends Component {
  render() {
    return(
    <div className='navbarSection'>
      <div className='navbar'>
        <div className='navbarLogo'>
          <img src={Logo} alt="Logo" id='logo'/>
        </div>
        <div className='links'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/Saved'>Saved Recipes</NavLink>
            <NavLink to='/Create'>Create a Recipe</NavLink>
        </div>
      </div>
    </div>
  )}
}
