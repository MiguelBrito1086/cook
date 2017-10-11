import React from "react"

const SearchResults = ({ results }) => (
  <ul>
    {results.map(result => (
      <li key={result.recipe_id}>
        <h1>{result.title}</h1>
        <img src={result.image_url} alt={result.title} />
      </li>
    ))}
  </ul>
)

export default SearchResults
