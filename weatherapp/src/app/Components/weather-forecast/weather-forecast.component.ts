import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/Services/weatherService.component';
import { WeatherForecast } from '../weather-items/weatheritemdata';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,public service:WeatherService) { }
  WeatherForecastList: WeatherForecast[] = []
  weekdays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday']
  cityName:string;
  cityCode:string;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id']
      this.cityCode = id
      this.service.searchForecastData(id).subscribe((Response)=>{
        this.cityName = Response.city.name
        const list = Response.list.splice(0,5)
        list.map((ele:any,i:number)=>{
          const forecast = new WeatherForecast(
            this.weekdays[i],
            ele.weather[0].main,
            (ele.main.temp_max-273.15).toFixed(0),
            (ele.main.temp_min-273.15).toFixed(0),
         )
         this.WeatherForecastList.push(forecast)
        })
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
