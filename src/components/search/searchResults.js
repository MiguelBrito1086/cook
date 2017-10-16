import React from "react"

const SearchResults = ({ results }) => (
  <ul className='searchThumbNail'>
    {results.map(result => (
      <li key={result.recipe_id} className='listThumbNail'>
        <a href={result.f2f_url}>
          {/* <iframe src={result.f2f_url} frameborder="0">pizza</iframe> */}
          <h1>{result.title}</h1>
          <img src={result.image_url} alt={result.title} className='thumbNailImage'/>
        </a>
      </li>
    ))}
  </ul>
)

export default SearchResults
