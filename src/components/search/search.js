import React, { Component } from "react";
// import SearchButton from "./searchButton";
import SearchResults from "./searchResults";

const API_KEY = "07ca88bbbf944fd37cd7ca724a67151b"

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      recipe: ""
    }
  }

  _search = event =>
    this.setState({
      recipe: event.target.value
    })

  fetchRecipe = event => {
    event.preventDefault()
    const { recipe } = this.state

    fetch(`https://sdg-cp.herokuapp.com?key=${API_KEY}&q=${recipe}`, {
      headers: {
        "target-url": "https://food2fork.com/api/search"
      }
    })
      .then(r => r.json())
      .then(({recipes}) => {
        this.setState({ recipes })
      })
  }

  render() {
    return (
      <div className="searchBarSection">
        <form action="submit" onSubmit={this.fetchRecipe}>
          <input
            type="text"
            onChange={this._search}
            placeholder="Find a Recipe"
            value={this.state.recipe}
          />
          <button type='submit' onClick={this.fetchRecipe}>Search</button>
        </form>
        <SearchResults results={this.state.recipes} />
      </div>
    )
  }
}
