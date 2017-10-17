import React, { Component } from 'react';
import NavBar from '../navBar/navbar';
import AddIngredient from '../create/addIngredient';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/CookLogo.png';

export default class CreatePage extends Component {

  render() {
    return (
      <div>
        <div className='navBarCreate'>
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
        {/* <NavBar /> */}
        <AddIngredient />
      </div>
    )
  }
}
