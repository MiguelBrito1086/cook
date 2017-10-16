import React, { Component } from 'react';



export default class AddIngredient extends Component {
  constructor() {
    super()
    this.state = {
      recipeName: '',
      ingredientName: '',
      ingredientAmount: '',
      ingredientMeasure: 'tspn',
      instructions: '',
      allIngredients: [],
      newRecipe: [],
    }
    this.addToList = this.addToList.bind(this)
    this.addToRecipeArray = this.addToRecipeArray.bind(this)
    this._remove = this._remove.bind(this)
  }

  componentDidMount() {
    const recipes = JSON.parse(localStorage.getItem('recipes'))
    this.setState({ newRecipe: recipes || [] })
  }

  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _remove = (event) => {
    const ingredientIndex = parseInt(event.target.dataset.ingredientIndex, 10)

    event.preventDefault()

    const allIngredientsExceptForDeleting = this.state.allIngredients.filter((ingredient, index) => ingredientIndex !== index)

    this.setState({ allIngredients: allIngredientsExceptForDeleting })
  }

  addToList = (event) => {
    event.preventDefault();
    let allIngredients = this.state.allIngredients.concat({
      name: this.state.ingredientName,
      amount: this.state.ingredientAmount,
      measure: this.state.ingredientMeasure,
    });
    this.setState({ allIngredients, ingredientName: '', ingredientAmount: '' });
    this.refs.ingredientName.focus()
  }

  addToRecipeArray = (event) => {
    event.preventDefault();
    let newRecipe = this.state.newRecipe.concat({
      recipeName: this.state.recipeName,
      allIngredients: this.state.allIngredients,
      instructions: this.state.instructions,
    });
    this.setState({ newRecipe, recipeName: '', allIngredients: [], instructions: '', }, () => {
      localStorage.setItem('recipes', JSON.stringify(this.state.newRecipe))
    })

    console.log(newRecipe);
  }

  render() {
    let ingredients = this.state.allIngredients.map((allIngredient, index) => (
          <li key={index} className='ingredientList'>
            <button type='button' onClick={this._remove} data-ingredient-index={index}>X</button>
            <span>{allIngredient.name} : {allIngredient.amount} {allIngredient.measure}</span>
          </li>
        ))

    return (
      <div>
        <h1>Create your own recipe!</h1>
        <form action="submit" onSubmit={this.addToList}>
          <label>Name of your Recipe:</label>
          <input type="text" name='recipeName' value={this.state.recipeName} onChange={this._change}/>
          <p>Please add your ingredients.</p>
          <div className='ingName'>
            <label htmlFor="POST-name">Ingredient Name:</label>
            <input type="text" onChange={this._change} value={this.state.ingredientName} name='ingredientName' ref='ingredientName'/>
          </div>
          <div className='ingAmount'>
            <label htmlFor="POST-name">Amount:</label>
            <input type="number" min='0' name='ingredientAmount' onChange={this._change} value={this.state.ingredientAmount}/>
            <select name="ingredientMeasure" onChange={this._change}>
              <option value="tspn">tspn</option>
              <option value="Tbsp">tbsp</option>
              <option value="cup">cup</option>
              <option value="lbs">lbs</option>
              <option value="oz">oz</option>
              <option value="pt">pt</option>
              <option value="qt">qt</option>
              <option value="gal">gal</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
              <option value="L">L</option>
            </select>
            <button type='submit' onClick={this.addToList}>Add Ingredient</button>
          </div>
          <div>
            <span>{ingredients}</span>
          </div>
          <div className='recipeInstructions'>
            <p>Add Instructions:</p>
            <textarea name="instructions" id="instructions" cols="100" rows="20" value={this.state.instructions} onChange={this._change}/>
          </div>
          <button type='button' onClick={this.addToRecipeArray}>Submit Recipe</button>
        </form>
      </div>
    )
  }
}
