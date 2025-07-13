import React from 'react';
import WeatherIcon from './WeatherIcon';

const CurrentWeather = ({ data }) => {
  const getFormattedDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="weather-card current-weather">
      <div className="location-info">
        <h1 className="city-name">{data.name}</h1>
        <span className="country">{data.sys.country}</span>
        <div className="date-time">{getFormattedDateTime()}</div>
      </div>
      
      <div className="weather-main">
        <div className="temperature-container">
          <span className="temperature">{Math.round(data.main.temp)}</span>
          <span className="temperature-symbol">°C</span>
        </div>
        
        <div className="weather-icon-container">
          <WeatherIcon icon={data.weather[0].icon} size="large" />
          <div className="weather-description">
            {data.weather[0].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;