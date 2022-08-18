import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Imported SVGs
import snow from '../icons/snow.svg'
import snowshowersday from '../icons/snow-showers-day.svg'
import snowshowersnight from '../icons/snow-showers-night.svg'
import thunderrain from '../icons/thunder-rain.svg'
import thundershowersday from '../icons/thunder-showers-day.svg'
import thundershowersnight from '../icons/thunder-showers-night.svg'
import rain from '../icons/rain.svg'
import showersday from '../icons/showers-day.svg'
import showersnight from '../icons/showers-night.svg'
import fog from '../icons/fog.svg'
import wind from '../icons/wind.svg'
import cloudy from '../icons/cloudy.svg'
import partlycloudyday from '../icons/partly-cloudy-day.svg'
import partlycloudynight from '../icons/partly-cloudy-night.svg'
import clearday from '../icons/clear-day.svg'
import clearnight from '../icons/clear-night.svg'

const CurrentCity = () => {
  const [currentweather, setCurrentWeather] = useState()
  const [currentcondition, setCurrentCondition] = useState()
  const [currentimage, setCurrentImage] = useState()
  const [date, setDate] = useState()

  const DisplayCurrentData = (result) => {
    var currenttemp = (
      (5 / 9) *
      (result.data.currentConditions.temp - 32)
    ).toFixed(1)
    var currentcond = result.data.currentConditions.conditions
    var currentimg = result.data.currentConditions.icon
    var date = new Date().toDateString()
    setCurrentWeather(currenttemp)
    setCurrentCondition(currentcond)
    setCurrentImage(currentimg)
    setDate(date)
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude
      var long = position.coords.longitude
      axios
        .get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=3UXAPDGA7RSE8EPQLPH5Z2G2N`
        )
        .then((res) => DisplayCurrentData(res))
    })
  }, [])

  const conditionalImage =
    currentimage === 'clear-night' ? (
      <img src={clearnight} alt='clear night' />
    ) : currentimage === 'clear-day' ? (
      <img src={clearday} alt='clear day' />
    ) : currentimage === 'partly-cloudy-night' ? (
      <img src={partlycloudynight} alt='partly cloudy night' />
    ) : currentimage === 'partly-cloudy-day' ? (
      <img src={partlycloudyday} alt='partly cloudy day' />
    ) : currentimage === 'cloudy' ? (
      <img src={cloudy} alt='cloudy' />
    ) : currentimage === 'wind' ? (
      <img src={wind} alt='wind' />
    ) : currentimage === 'fog' ? (
      <img src={fog} alt='fog' />
    ) : currentimage === 'showers-night' ? (
      <img src={showersnight} alt='showers night' />
    ) : currentimage === 'showers-night' ? (
      <img src={showersday} alt='showers day' />
    ) : currentimage === 'rain' ? (
      <img src={rain} alt='rain' />
    ) : currentimage === 'thunder-showers-night' ? (
      <img src={thundershowersnight} alt='thunder showers night' />
    ) : currentimage === 'thunder-showers-day' ? (
      <img src={thundershowersday} alt='thunder showers day' />
    ) : currentimage === 'thunder-rain' ? (
      <img src={thunderrain} alt='thunder rain' />
    ) : currentimage === 'snow-showers-night' ? (
      <img src={snowshowersnight} alt='snow showers night' />
    ) : currentimage === 'snow-showers-day' ? (
      <img src={snowshowersday} alt='snow showers day' />
    ) : currentimage === 'snow' ? (
      <img src={snow} alt='snow' />
    ) : (
      <></>
    )

  return (
    <div className='currentcity'>
      <div className='currentcity-icon'>
        <p className='yellow'>Your Current Location</p>
        <div className='conditionalImage'>{conditionalImage}</div>
      </div>
      <div>
        <p className='currentcondition'>
          <span className='currentemp'>{currentweather}</span>
          <sup className='currentdeg'>&#176;C</sup>
        </p>
        <p className='currentcondition-text'>{currentcondition}</p>
        <p className='currentcondition-date'>{date}</p>
      </div>
    </div>
  )
}

export default CurrentCity
