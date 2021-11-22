import React from 'react'

const CityWeather = ({ cloud, dew, feelslike, sunrise, sunset }) => {
  return (
    <div className='weather-info'>
      <p className='info-items'>
        <span className='info-title'>Clouds</span>
        <span className='info-value'>{cloud}</span>
      </p>
      <p className='info-items'>
        <span className='info-title'>Dew Factor</span>
        <span className='info-value'>{dew}</span>
      </p>
      <p className='info-items'>
        <span className='info-title'> Feels Like</span>
        <span className='info-value'>{feelslike}</span>
      </p>
      <p className='info-items'>
        <span className='info-title'> Sunrise</span>
        <span className='info-value'>{sunrise}</span>
      </p>
      <p className='info-items'>
        <span className='info-title'> Sunset</span>
        <span className='info-value'>{sunset}</span>
      </p>
    </div>
  )
}

export default CityWeather
