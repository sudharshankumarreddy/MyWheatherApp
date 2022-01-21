import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './Components/weather/weather.component';
import { WeatherService } from './Services/weatherService.component';
import { WeatherItemsComponent } from './Components/weather-items/weather-items.component';
import { WeatherForecastComponent } from './Components/weather-forecast/weather-forecast.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherItemsComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
