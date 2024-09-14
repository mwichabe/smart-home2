import React from "react"
const Search = props => {
  return (
    <div className="input-group mb-5">
      <input
        type="text"
        name="search"
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  )
}
export default Search
