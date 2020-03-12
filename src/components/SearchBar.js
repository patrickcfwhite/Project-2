import React from 'react'

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="Search">
      <div className="container">
        {/* attach controls together */}
        <div className="field has-addons">
          {/* modifier on the element you want to fill up the remaining space */}
          <div className="control is-expanded"></div>
          <input
            className="input is-medium"
            type="search"
            placeholder="Search by artist or track"
            // value={query}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button onClick={handleSubmit} className="button is-medium">Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar