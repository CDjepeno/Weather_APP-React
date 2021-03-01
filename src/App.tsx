 import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/board/Board';
import Form from './components/form/Form';
import WeatherService, { WeatherForecast, WeatherType } from './services/WeatherAPI';

const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather]     = useState<WeatherType>()
  const [forecast, setForecast]   = useState<WeatherForecast>()
  const [location , setLocation]  = useState<string>("")
  const [error, setError]         = useState<string>("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    const weather  = await WeatherService.getCurrentWeather(location);
    const forecast2 = await WeatherService.getForecast(location);
    if(weather && forecast2) {
      setIsLoading(false)
      setForecast(forecast2)
      setWeather(weather)

    } else {
      setError('erreur est survenue');
    }
    
  } 

  return (
      <div className="wrapper">
        <Form handleSubmit={handleSubmit} location={location} setLocation={setLocation} />
        {isLoading &&<p>Recherche...</p>}
        {weather && forecast &&
          <Board 
            weather={weather} 
            forecast={forecast} 
          />
        }
        {error && <p>{error}</p>}
      </div>
  );
}

export default App;
