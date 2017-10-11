import React, { Component } from 'react';
import NavBar from '../navBar/navbar';
import AddIngredient from '../create/addIngredient';
// import AddInstruction from './create/addInstruction';

export default class CreatePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AddIngredient />
        {/* <AddInstruction /> */}
      </div>
    )
  }
}
