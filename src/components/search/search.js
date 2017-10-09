import React, { Component } from 'react';
import SearchResults from './searchResults';

const API_KEY = '07ca88bbbf944fd37cd7ca724a67151b';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      recipes: [],
      recipe: '',
    }
  }

  _search = event => (
    this.setState({
      recipe: event.target.value
    })
  )

  fetchRecipe = (event) => {
    event.preventDefault();
    const { recipe } = this.state;
    let recipeURL = `https:http://food2fork.com/api/search?key=${API_KEY}&q=${recipe}`;

    fetch(recipeURL)
    .then(r => r.json())
    .then(({recipe}) => {
      this.setState({recipe});
    })
  }

  render() {
      return (
        <div className='searchBarSection'>
          <form action="submit">
            <input type="text" onChange={this._search} placeholder='Find a Recipe' value={this.state.recipe}/>
          </form>
          <SearchResults onClick={this.fetchRecipe} />
        </div>
      )
      console.log(SearchResults);
  }
}
