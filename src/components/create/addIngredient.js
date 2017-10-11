import React, { Component } from 'react';

export default class AddIngredient extends Component {
  render() {
    return (
      <div>
        <h1>Create your own recipe!</h1>
        <p>Please add your ingredients.</p>
        <form action="submit" method='post'>
          <form action="">
            <div className='ingName'>
              <label htmlFor="POST-name">Ingredient Name:</label>
              <input type="text"/>
            </div>
            <div className='ingAmount'>
              <label htmlFor="POST-name">Amount:</label>
              <input type="number" min='0' />
              <select name="select">
                <option value="tspn" selected>tspn</option>
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
            </div>
          </form>
        </form>
      </div>
    )
  }
}
