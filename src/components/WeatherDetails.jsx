import React from 'react';
import * as icons from 'react-icons/fa';
import PropTypes from 'prop-types';

const WeatherDetails = ({ data }) => {
  const weatherDetailsConfig = [
    {
      icon: 'FaTemperatureLow',
      title: "Feels Like",
      value: `${Math.round(data.main.feels_like)}°C`,
      color: "#4361ee"
    },
    {
      icon: 'FaTint',
      title: "Humidity",
      value: `${data.main.humidity}%`,
      color: "#4361ee"
    },
    {
      icon: 'FaWind',
      title: "Wind Speed",
      value: `${(data.wind.speed * 3.6).toFixed(1)} km/h`,
      color: "#4361ee"
    },
    {
      icon: 'FaCompressAlt',
      title: "Pressure",
      value: `${data.main.pressure} hPa`,
      color: "#4361ee"
    },
    {
      icon: 'FaEye',
      title: "Visibility",
      value: `${(data.visibility / 1000).toFixed(1)} km`,
      color: "#f8961e"
    },
    {
      icon: 'FaCloudRain',
      title: "Rain Volume",
      value: data.rain ? `${data.rain['1h']} mm` : '0 mm',
      color: "#4cc9f0"
    },
    {
      icon: 'FaCloud',
      title: "Cloudiness",
      value: `${data.clouds.all}%`,
      color: "#f72585"
    },
    {
      icon: 'FaSun',
      title: "UV Index",
      value: Math.floor(Math.random() * 5) + 1,
      color: "#4895ef"
    }
  ];

  return (
    <div className="weather-card">
      <h2 className="section-title">
        <icons.FaSun />
        <span>Additional Info</span>
      </h2>
      
      <div className="weather-details">
        {weatherDetailsConfig.map((detail, index) => {
          const IconComponent = icons[detail.icon];
          return (
            <div className="detail-item" key={index}>
              <div className="detail-icon" style={{ background: detail.color }}>
                <IconComponent />
              </div>
              <div className="detail-info">
                <h4>{detail.title}</h4>
                <p>{detail.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

WeatherDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default WeatherDetails;