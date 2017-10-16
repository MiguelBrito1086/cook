import React, { Component } from "react"
import SearchButton from "./searchButton"
import SearchResults from "./searchResults"

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
    const url = `https://food2fork.com/api/search?key=${API_KEY}&q=${recipe}`
    let recipeURL = `http://cors-proxy.htmldriven.com/?url=${encodeURIComponent(
      url
    )}`

    fetch(recipeURL)
      .then(r => r.json())
      .then(({ body }) => {
        const { recipes } = JSON.parse(body)
        this.setState({ recipes })
      })
  }

  render() {
    return (
      <div className="searchBarSection">
        <form action="submit">
          <input
            type="text"
            onChange={this._search}
            placeholder="Find a Recipe"
            value={this.state.recipe}
          />
        </form>
        <SearchButton onClick={this.fetchRecipe} />
        <SearchResults results={this.state.recipes} />
      </div>
    )
  }
}
