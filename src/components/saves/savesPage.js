import React, { Component } from 'react';
import NavBar from '../navBar/navbar';
import MyRecipes from './myRecipes';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/CookLogo.png';

export default class SavesPage extends Component {
  render() {
    return (
      <div>
        <div className='navBarSaved'>
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
        <MyRecipes />
      </div>
    )
  }
}
