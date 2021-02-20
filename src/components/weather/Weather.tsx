import moment from 'moment';
import React from 'react'
import { WeatherType } from '../../services/WeatherAPI';


export interface WeatherProps {
    weather: WeatherType
}
 
const Weather: React.FC<WeatherProps> = ({ weather }) => {
    return ( 
        <div className="weather" id="weather">
            <div className="group secondary">
                <h3 id="dt">{moment.unix(weather.dt).format('DD/MM/YYYY')}</h3>
                <h3 id="description">{weather.weather[0].description}</h3>
            </div>
            <div className="group secondary">
                <h3 id="wind">Vent: {weather.wind.speed}</h3>
                <h3 id="humidity">Humidité: {weather.main.humidity}</h3>
            </div>
            <div className="temperature" id="temperature">
                <h1 className="temp" id="temp">
                    <span id="num">{Math.round(weather.main.temp)}</span>
                    <a className="celsius active" id="celsius">°C</a>
                </h1>
            </div>
        </div>
     );
}
 
export default Weather;