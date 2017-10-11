import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/CookLogo.png';

export default class NavBar extends Component {
  render() {

  //   var controller = new ScrollMagic.Controller();
  //
  //   // <div class="spacer s2"></div>
  //   // <div id="trigger2" class="spacer s0"></div>
  //   // <div id="pin2" class="box2 blue">
  //   // 	<p>Take me with you!</p>
  //   // 	<a href="#" class="viewsource">view source</a>
  //   // </div>
  //   // <div class="spacer s2"></div>
  //   // <script>
	// $(function () { // wait for document ready
	// 	// build scene
	// 	var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
	// 					.setPin("#pin2")
	// 					.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
	// 					.addTo(controller);
	// });


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
