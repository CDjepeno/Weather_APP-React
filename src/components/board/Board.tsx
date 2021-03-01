import React, { useEffect } from 'react'
import Forecast from '../forecast/Forecast';
import Weather from '../weather/Weather';
import { WeatherForecast, WeatherType } from '../../services/WeatherAPI';


export interface BoardProps {
    weather: WeatherType;
    forecast: WeatherForecast;
}

const Board: React.FC<BoardProps> = ({ weather, forecast }) => {

    const warm =weather.weather[0].description;

    console.log(warm);
    
    let temp: any; 
    switch(warm){
        case "ciel dégagé" : temp = "url(https://journalmetro.com/wp-content/uploads/2019/03/iStock-947314334.jpg?w=860)"
        break;
        case "brume" : temp = "url(https://cdn-s-www.estrepublicain.fr/images/59481355-BB1D-4204-AF7B-58AC2790D1EF/NW_raw/le-village-recouvert-de-brume-1600073429.jpg)"
        break;
        case "légère pluie" : temp = "url(https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/mobile_1440w/2016/11/pluie.jpg)"
        break;
        case "couvert" : temp = "url(https://lh3.googleusercontent.com/proxy/qSG1VUvD8d2Hrv7Xb517WSiaqwAIaIo4AJmRz9MwMuOWC0YzmPV_n4F7F0Gwk4Xy5jpZf24cIrLHPU0tPXyJKi3ag8CbQDPw56Kfz4UVPnoSftuvHkfSiTTfCCc5Lp72i_aPsOh7Rg)"
        break;
        case "" : temp = "url(https://lh3.googleusercontent.com/proxy/qSG1VUvD8d2Hrv7Xb517WSiaqwAIaIo4AJmRz9MwMuOWC0YzmPV_n4F7F0Gwk4Xy5jpZf24cIrLHPU0tPXyJKi3ag8CbQDPw56Kfz4UVPnoSftuvHkfSiTTfCCc5Lp72i_aPsOh7Rg)"
        break;
        case "" : temp = "url(https://lh3.googleusercontent.com/proxy/qSG1VUvD8d2Hrv7Xb517WSiaqwAIaIo4AJmRz9MwMuOWC0YzmPV_n4F7F0Gwk4Xy5jpZf24cIrLHPU0tPXyJKi3ag8CbQDPw56Kfz4UVPnoSftuvHkfSiTTfCCc5Lp72i_aPsOh7Rg)"
        break;
    } 
    
    useEffect(() => {
        document.body.style.backgroundImage = temp; 
    },[warm])

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