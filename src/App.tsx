 import React, { useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import Form from './components/form/Form';
import WeatherService, { WeatherForecast, WeatherType } from './services/WeatherAPI';

const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather] = useState<WeatherType>()
  const [forecast, setForecast] = useState<WeatherForecast>()
  const [location , setLocation] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const temp = await WeatherService.getCurrentWeather(location);
    const forecast = await WeatherService.getForecast(location);

    setWeather(temp)
  }
  console.log(weather);

  return (
    <div className="wrapper">
      <Form handleSubmit={handleSubmit} location={location} setLocation={setLocation} />

      {weather &&
        <Board weather={weather} />
      }
    </div>
  );
}

export default App;
