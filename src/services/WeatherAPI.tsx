import axios from "axios";
import { API_BASE_PARAMS, API_BASE_URL } from '../config';

export interface WeatherType {
    weather : Array<{
        description: string;
    }>
    dt: number;
    wind: {
        speed: number;
        deg: number;
    }
    main: {
        humidity: number;
        temp: number;
    }
    name: string;
    sys: {
        country: string
    }
}

export interface WeatherForecast {
    list: Array<{
        dt: number
        temp: {
            max: number;
            min: number;
        }
    }>
    cod: string
}

export default class WeatherService {

    static getCurrentWeather(location: string): Promise<WeatherType> {
        return axios
        .get(`${API_BASE_URL}weather?q=${location}${API_BASE_PARAMS}`)
        .then(response => response.data)
        .then(data => this.isEmpty(data) ? null : data)
        .catch(error => this.handleError(error));
    }

    static getForecast(location: string): Promise<WeatherForecast> {
        return axios
        .get(`${API_BASE_URL}forecast/daily?q=${location}&cnt=5${API_BASE_PARAMS}`)
        .then(response => response.data)
        .then(data => this.isEmpty(data) ? null : data)
        .catch(error => this.handleError(error));
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error):void {
        console.error(error)
    }

}