import React, { Component } from 'react';
import NavBar from '../navBar/navbar';
import MyRecipes from './myRecipes';
// import SavedRecipes from './saves/savedRecipes';

export default class SavesPage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <MyRecipes />
      </div>
    )
  }
}
