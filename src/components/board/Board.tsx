import React from 'react'
import Forecast from '../forecast/Forecast';
import Weather from '../weather/Weather';
import { WeatherForecast, WeatherType } from '../../services/WeatherAPI';


export interface BoardProps {
    weather: WeatherType;
    forecast: WeatherForecast;
}
 
const Board: React.FC<BoardProps> = ({weather, forecast}) => {
          
    return (<>
        <div className="panel">
            <h2 className="city" id="city">
                {weather.sys.country}
            </h2>
            {forecast.cod === "200" &&
            <> 
                <Weather weather={weather} />
                <Forecast forecast={forecast} /> 
            </>
             }
        </div>
        

    </>);
}
 
export default Board;