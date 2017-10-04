import React, { Component } from 'react';
import NavBar from '../navBar/navbar';

export default class Home extends Component {
  render() {
    return(
    <div>
      <NavBar />
      <div>
        <div className='welcome'>
          <h1 className='welcomeTitle'>Welcome</h1>
        </div>
      </div>
    </div>
  )}
}
