import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/Services/weatherService.component';
import { WeatherItem } from '../weather-items/weatheritemdata';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  wForm: FormGroup;
  weatherItems: WeatherItem[] = []
  constructor(public fb:FormBuilder, public service:WeatherService,public router:Router) {
      this.wForm = this.fb.group({
         zipcode: new FormControl('',Validators.required)
      })
   }

  ngOnInit(): void {
    this.weatherItems = this.service.getWeatherItems();
  }

  addLocation(){
     if(this.wForm.valid){
       if(!this.weatherItems.some(
         ele => ele.zipcode == this.wForm.value.zipcode
       )){
        this.service.searchWeatherData(this.wForm.value.zipcode).subscribe((response)=>{
          const weatherItem = new WeatherItem(
           response.name,
           response.weather[0].main,
           (response.main.temp-273.15).toFixed(0),
           (response.main.temp_max-273.15).toFixed(0),
           (response.main.temp_min-273.15).toFixed(0),
           this.wForm.value.zipcode)
           this.service.addWeatherItem(weatherItem)
           this.wForm.reset()
        },(err) => alert(err.error.message))
       }else{
         alert('Zipcode Location Already Exists')
       }
     }
  }

  removeItem(weatherItem:any){
   const index = this.weatherItems.findIndex((ele:any) => ele.zipcode == weatherItem.zipcode);
   this.weatherItems.splice(index,1)
   alert(weatherItem.location + ' Removed Successfully')
  }
}
