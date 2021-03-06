import React, { useState } from 'react'

const SearchCity = ({ ChangeName }) => {
  const [city, setCity] = useState('')

  const HandleCity = (e) => {
    setCity(e.target.value)
  }

  const HandleChange = () => {
    ChangeName(city)
  }

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Enter City...'
        className='input'
        value={city}
        onChange={HandleCity}
      />
      <button className='btn' onClick={HandleChange}>
        <i className='fas fa-search'></i>
      </button>
    </div>
  )
}

export default SearchCity
