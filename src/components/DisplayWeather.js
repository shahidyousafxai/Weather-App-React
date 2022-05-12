import React, { useEffect, useState } from 'react'
import SearchCity from './SearchCity'
import axios from 'axios'
import CurrentCity from './CurrentCity'
import CityWeather from './CityWeather'

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

const DisplayWeather = () => {
  const [cityname, setCityname] = useState('')
  const [address, setAddress] = useState()
  const [date, setDate] = useState()
  const [weather, setWeather] = useState()
  const [condition, setCondition] = useState()
  const [weatherimage, setWeatherImage] = useState('')
  const [humidity, setHumidity] = useState()
  const [cloud, setCloud] = useState()
  const [dew, setDew] = useState()
  const [feelslike, setFeelsLike] = useState()
  const [sunrise, setSunrise] = useState()
  const [sunset, setSunset] = useState()

  // Return warning if you click empty searchbar
  const ChangeName = (city) => {
    city === '' ? alert('Please enter city...!') : setCityname(city)
  }

  // API to get weather data of searched city
  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}/next4days?unitGroup=us&key=3UXAPDGA7RSE8EPQLPH5Z2G2N`
        // `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}?key=CM2SRAXYQS2W65SGH3HRLMSS4`
      )
      .then((res) => DisplayData(res))
  }, [cityname])

  // API and GeoLocation used to get weather data of your current city

  // display data function
  const DisplayData = (weather) => {
    var temp = ((5 / 9) * (weather.data.currentConditions.temp - 32)).toFixed(1)
    var cond = weather.data.currentConditions.conditions
    var hum = weather.data.currentConditions.humidity
    var image = weather.data.currentConditions.icon
    var address = weather.data.resolvedAddress
    var dateEpoch = new Date(
      weather.data.currentConditions.datetimeEpoch * 1000
    ).toDateString()
    var cloud = weather.data.currentConditions.cloudcover
    var dew = weather.data.currentConditions.dew
    var feelslike = (
      (5 / 9) *
      (weather.data.currentConditions.feelslike - 32)
    ).toFixed(1)
    var sunrise = new Date(
      weather.data.currentConditions.sunriseEpoch * 1000
    ).toLocaleTimeString()
    var sunset = new Date(
      weather.data.currentConditions.sunsetEpoch * 1000
    ).toLocaleTimeString()

    setWeather(temp)
    setCondition(cond)
    setHumidity(hum)
    setWeatherImage(image)
    setAddress(address)
    setDate(dateEpoch)
    setCloud(cloud)
    setDew(dew)
    setFeelsLike(feelslike)
    setSunrise(sunrise)
    setSunset(sunset)
    console.log(weather.data.currentConditions)
  }
  const conditionalImage =
    weatherimage === 'clear-night' ? (
      <img src={clearnight} alt='clear night' />
    ) : weatherimage === 'clear-day' ? (
      <img src={clearday} alt='clear day' />
    ) : weatherimage === 'partly-cloudy-night' ? (
      <img src={partlycloudynight} alt='partly cloudy night' />
    ) : weatherimage === 'partly-cloudy-day' ? (
      <img src={partlycloudyday} alt='partly cloudy day' />
    ) : weatherimage === 'cloudy' ? (
      <img src={cloudy} alt='cloudy' />
    ) : weatherimage === 'wind' ? (
      <img src={wind} alt='wind' />
    ) : weatherimage === 'fog' ? (
      <img src={fog} alt='fog' />
    ) : weatherimage === 'showers-night' ? (
      <img src={showersnight} alt='showers night' />
    ) : weatherimage === 'showers-night' ? (
      <img src={showersday} alt='showers day' />
    ) : weatherimage === 'rain' ? (
      <img src={rain} alt='rain' />
    ) : weatherimage === 'thunder-showers-night' ? (
      <img src={thundershowersnight} alt='thunder showers night' />
    ) : weatherimage === 'thunder-showers-day' ? (
      <img src={thundershowersday} alt='thunder showers day' />
    ) : weatherimage === 'thunder-rain' ? (
      <img src={thunderrain} alt='thunder rain' />
    ) : weatherimage === 'snow-showers-night' ? (
      <img src={snowshowersnight} alt='snow showers night' />
    ) : weatherimage === 'snow-showers-day' ? (
      <img src={snowshowersday} alt='snow showers day' />
    ) : weatherimage === 'snow' ? (
      <img src={snow} alt='snow' />
    ) : (
      <></>
    )
  return (
    <>
      <div className='current-cityname'>
        <div className='searchcontainer'>
          <SearchCity cityname={cityname} ChangeName={ChangeName} />

          {/* Conditionally rendering of data from APIs */}
          <div className='result'>
            {cityname === '' ? (
              <>
                <div className='digits'>
                  <span className='temprature'>
                    <span className='degree'>----</span>{' '}
                    <sup className='symbol'>&#176;C</sup>
                  </span>
                </div>
                <div className='cond'>
                  <p className='weather'>
                    <span className='weather-span'>------</span>
                  </p>
                  <p className='city'>
                    <span className='city-span'>------</span>
                  </p>
                  <p className='date'>
                    <span className='date-span'>------</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className='digits'>
                  <span className='conditional'>{conditionalImage}</span>
                  <span className='temprature'>
                    <span className='degree'>{weather}</span>{' '}
                    <span className='symbol'>&#176;C</span>
                  </span>
                </div>
                <div className='cond'>
                  <p className='weather-span'>{condition}</p>
                  <p className='city-span'>{address}</p>
                  <p className='date-span'>{date}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <CurrentCity />
      </div>
      <div className='cityweather'>
        <CityWeather
          humidity={humidity}
          cloud={cloud}
          dew={dew}
          feelslike={feelslike}
          sunrise={sunrise}
          sunset={sunset}
        />
      </div>
    </>
  )
}

export default DisplayWeather
