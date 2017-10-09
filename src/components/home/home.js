import React, { Component } from 'react';
import NavBar from '../navBar/navbar';
import Search from '../search/search';

export default class Home extends Component {
  render() {
    return(
    <div>
      <NavBar />
      <div className='welcomeSection'>
        <div className='welcome'>
          <h1 className='welcomeTitle'>Welcome</h1>
          <p>to
            <span className='welcomeCook'> Cook </span>
            where you can easily find recipes,
          </p>
          <p>save your favorites and create you own!</p>
        </div>
        <div className='blueberries'></div>
      </div>
      <div className='searchSection'>
        <h1>Find something yummy to <span className='welcomeCook'> Cook </span></h1>
        <div>
          <Search />
        </div>
      </div>
      <div className='searchResultsSection'>

      </div>
    </div>
  )}
}
