import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import { FaCalendarAlt } from 'react-icons/fa';

const Forecast = ({ data }) => {
  const getDailyForecasts = () => {
    const dailyForecasts = [];
    const daysProcessed = new Set();
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      
      if (!daysProcessed.has(day)) {
        daysProcessed.add(day);
        dailyForecasts.push({
          day,
          icon: item.weather[0].icon,
          temp_max: Math.round(item.main.temp_max),
          temp_min: Math.round(item.main.temp_min),
          description: item.weather[0].description
        });
      }
    });
    
    return dailyForecasts.slice(0, 5);
  };

  const dailyForecasts = getDailyForecasts();

  return (
    <div className="forecast-container">
      <h2 className="section-title">
        <FaCalendarAlt />
        <span>5-Day Forecast</span>
      </h2>
      
      <div className="forecast-list">
        {dailyForecasts.map((day, index) => (
          <div className="forecast-item" key={index}>
            <div className="forecast-day">{day.day}</div>
            <WeatherIcon icon={day.icon} />
            <div className="forecast-temp">
              <span className="temp-max">{day.temp_max}°</span>
              <span className="temp-min">{day.temp_min}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  data: PropTypes.object.isRequired
};

export default Forecast;