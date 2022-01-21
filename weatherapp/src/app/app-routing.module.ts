import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './Components/weather-forecast/weather-forecast.component';
import { WeatherComponent } from './Components/weather/weather.component';

const routes: Routes = [
  {
    path:'', component:WeatherComponent
  },
  {
    path:'forecast/:id' ,component: WeatherForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
