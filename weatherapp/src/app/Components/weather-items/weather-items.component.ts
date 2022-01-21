import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/app/Services/weatherService.component';
import { WeatherItem } from './weatheritemdata';

@Component({
  selector: 'app-weather-items',
  templateUrl: './weather-items.component.html',
  styleUrls: ['./weather-items.component.css']
})
export class WeatherItemsComponent implements OnInit {
  @Input('item') weatherItem: WeatherItem;
  @Output() newItemEvent = new EventEmitter();

  constructor(public service:WeatherService,public router:Router) {}

  ngOnInit(): void {
  }

  removeLocation(weatherItem:any){
    this.newItemEvent.emit(weatherItem)
  }

  forecast(weatherItem:any){
    this.router.navigate(['forecast/',weatherItem.zipcode])
  }
}
