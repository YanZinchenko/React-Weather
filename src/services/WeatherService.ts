import axios, { AxiosResponse } from "axios";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<any>> {
        return axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=7faaf23cd85d8081a0874b3d2c005f55`);
    }
}