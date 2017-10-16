import React, { Component } from 'react';

class MyRecipes extends Component {
  render() {
    const recipes = JSON.parse(localStorage.getItem('recipes')).map((recipe, i) => {
      return <div key={i}>
        <h2>{recipe.recipeName}</h2>
        <ul>
          {recipe.allIngredients.map((item, i) => {
            return <li key={i}>
              <strong>{item.name}</strong> ({item.amount} {item.measure})
            </li>
          })}
        </ul>
        <div>
          {recipe.instructions.split("\n").map((para, i) => {
            return <p key={i}>{para}</p>
          })}
        </div>
      </div>
    })


    return (
      <div>{recipes}</div>
    );
  }
}

export default MyRecipes
