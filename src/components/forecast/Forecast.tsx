import React from 'react'
import { WeatherForecast } from '../../services/WeatherAPI';
import moment from 'moment';


export interface ForecastProps {
    forecast: WeatherForecast
}


const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
    const forecastList = forecast.list;   
    
    return (
        <div className="forecast" id="forecast">
            {forecastList.map((item: any, i:any) => {
                return (
                <div key={i} className="block">
                    <h3 className="secondary">{moment.unix(item.dt).format('ddd')} </h3>
                    <h2 className="high">{Math.round(item.temp.max)} </h2>
                    <h4 className="secondary">{Math.round(item.temp.min)}</h4>
                </div>
                )
            }) 
            }
        </div>
    );
}
 
export default Forecast;