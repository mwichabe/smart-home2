import React from "react"

function SearchProducts(props) {
  const { onChange, value } = props
  return (
    <div className='input-group mb-5'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        name='search'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchProducts
