import React from 'react';

const WeatherIcon = ({ icon, size = 'normal' }) => {
  const iconSize = size === 'large' ? '120px' : '50px';
  
  return (
    <img 
      src={`https://openweathermap.org/img/wn/${icon}@${size === 'large' ? '4x' : '2x'}.png`} 
      alt="Weather icon"
      style={{ width: iconSize, height: iconSize }}
    />
  );
};

export default WeatherIcon;