import React, { Component } from 'react';

class MyRecipes extends Component {

  state = {
    recipes: []
  }

  componentDidMount () {
    this.setState({
      recipes: JSON.parse(localStorage.getItem('recipes')) || []
    })
  }

  _remove = (event) => {
    const recipeIndex = parseInt(event.target.dataset.recipeIndex, 10)

    event.preventDefault()

    const allRecipesExceptForDeleting = JSON.parse(localStorage.getItem('recipes')).filter((recipe, index) => recipeIndex !== index)

    this.setState({ recipes: allRecipesExceptForDeleting, }, () => { localStorage.setItem('recipes', JSON.stringify(this.state.recipes)) }
    )
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => <div className='renderSaved' key={i}>
        <div className='recipeCard'>
          <div>
            <h2>
              {recipe.recipeName}
            </h2>
            <ul>
              {recipe.allIngredients.map((item, i) => {
                return <li key={i}>
                  <strong>{item.name}</strong> ({item.amount} {item.measure})
                </li>
              })}
            </ul>
          </div>
          <div className='savedInstruction'>
            {recipe.instructions.split("\n").map((para, i) => {
              return <p key={i}>{para}</p>
            })}
          </div>
          <div>
            <button type='button' onClick={this._remove} data-recipe-index={i}>X</button>
          </div>
        </div>
      </div>
    )


    return (
      <div className='savedBody'>{recipes}</div>
    );
  }
}

export default MyRecipes
