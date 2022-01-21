import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"; 
import { WeatherItem } from "../Components/weather-items/weatheritemdata";
@Injectable()
export class WeatherService{
    constructor(private http:HttpClient){}
    WEATHER_ITEMS: WeatherItem[] = [];

    getWeatherItems() {
        return this.WEATHER_ITEMS = JSON.parse(localStorage.getItem('weatherList') || '[]');
    }

    addWeatherItem(weatherItem: WeatherItem) {
        this.WEATHER_ITEMS.push(weatherItem);
        localStorage.setItem('weatherList',JSON.stringify(this.WEATHER_ITEMS))
    }

    searchWeatherData(zipcode:any):Observable<any>{
     return  this.http.get('http://api.openweathermap.org/data/2.5/weather?zip='+ zipcode +'&appid=5a4b2d457ecbef9eb2a71e480b947604')
    }

    searchForecastData(zipcode:any):Observable<any>{
        return  this.http.get('http://api.openweathermap.org/data/2.5/forecast?zip='+ zipcode +'&appid=5a4b2d457ecbef9eb2a71e480b947604')
    }
}