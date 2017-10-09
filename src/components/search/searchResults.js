import React from 'react';

const SearchResults = ({ results }) =>
  <ul>
    {results.map((result) =>
      <li key={result.id}>
        <img src={result.img_url} alt={result.title}/>
        <h1>{result.title}</h1>
      </li>
    )}
  </ul>

export default SearchResults
