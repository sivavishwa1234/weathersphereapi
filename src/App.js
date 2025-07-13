import React, { useState, useEffect } from 'react';
import { FaCloudSun, FaHeart, FaExclamationTriangle } from 'react-icons/fa';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('London');

  const API_KEY = 'ba5af5a1b59df55b4487d20896421cb9';

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      
      if (!currentResponse.ok) {
        throw new Error('City not found');
      }
      
      const currentData = await currentResponse.json();
      setWeatherData(currentData);

      // Fetch forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      
      if (!forecastResponse.ok) {
        throw new Error('Forecast data not available');
      }
      
      const forecastData = await forecastResponse.json();
      setForecastData(forecastData);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <FaCloudSun />
          <span>WeatherSphere</span>
        </div>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main>
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <FaExclamationTriangle />
            <p>{error}</p>
          </div>
        )}

        {weatherData && !loading && !error && (
          <>
            <div className="main-content">
              <CurrentWeather data={weatherData} />
              <WeatherDetails data={weatherData} />
            </div>
            {forecastData && <Forecast data={forecastData} />}
          </>
        )}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} WeatherSphere | Powered by OpenWeatherMap API</p>
        <p>Developed with <FaHeart /> for weather enthusiasts</p>
      </footer>
    </div>
  );
}

export default App;