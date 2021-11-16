import React, { useEffect, useState } from 'react'
import SearchCity from './SearchCity'
import axios from 'axios'

const DisplayWeather = (city) => {
  const [cityname, setCityname] = useState('')
  const [weather, setWeather] = useState()
  const [condition, setCondition] = useState()
  const [humidity, setHumidity] = useState()
  const [country, setCountry] = useState()
  const ChangeName = (city) => {
    city === '' ? alert('Please enter city...!') : setCityname(city)
  }

  const DisplayData = (weather) => {
    var temp = weather.data.main.temp
    var cond = weather.data.weather[0].description
    var hum = weather.data.main.humidity
    var count = weather.data.sys.country
    setWeather(temp)
    setCondition(cond)
    setHumidity(hum)
    setCountry(count)
    console.log(cond)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=3a49388c922304d5514233a2bdabf57e`
      )
      .then((res) => DisplayData(res))
  }, [cityname])
  return (
    <>
      <SearchCity cityname={cityname} ChangeName={ChangeName} />
      <div className='result'>
        {cityname === '' ? (
          <>
            <div className='digits'>
              <span className='temprature'>
                <span className='degree'>----</span>{' '}
                <span className='symbol'>&#176;C</span>
              </span>
            </div>
            <div className='cond'>
              <p className='city'>
                City: <span className='city-span'>----</span>
              </p>
              <p className='weather'>
                Condition: <span className='weather-span'>----</span>
              </p>
              <p className='humidity'>
                Humidity: <span className='humidity-span'>----</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className='digits'>
              <span className='temprature'>
                <span className='degree'>{weather}</span>{' '}
                <div className='temp-symbol'>
                  <span className='symbol {}'>&#176;C</span>
                  <i
                    className={
                      condition === 'clear sky'
                        ? 'fas fa-sun color'
                        : condition === 'few clouds'
                        ? 'fas fa-cloud-sun color'
                        : condition === 'scattered clouds'
                        ? 'fas fa-cloud color'
                        : condition === '	broken clouds'
                        ? 'fas fa-cloud color'
                        : condition === 'shower rain'
                        ? 'fas fa-cloud-showers-heavy color'
                        : condition === 'rain'
                        ? 'fas fa-cloud-showers-heavy color'
                        : condition === 'snow'
                        ? 'fas fa-snowflake color'
                        : condition === 'overcast clouds'
                        ? 'fas fa-cloud color'
                        : ''
                    }
                  ></i>
                </div>
              </span>
            </div>
            <div className='cond'>
              <p className='city'>
                City:{' '}
                <span className='city-span'>
                  {cityname}
                  {', '}
                  {country}
                </span>
              </p>
              <p className='weather'>
                Condition: <span className='weather-span'>{condition}</span>
              </p>
              <p className='humidity'>
                Humidity: <span className='humidity-span'>{humidity}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default DisplayWeather
