import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Forecast } from 'src/app/models/forecast.model';
import { Tracker } from 'src/app/models/tracker.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData1: Tracker;
  weatherData: any = {};
  forecastData: any = {};
  fiveDaysForecastData: Forecast[] = [];

  constructor(private weatherService: WeatherService ) { }

  ngOnInit(): void {

  }


  getCity(city: string) {
    const promise1 = this.weatherService.getWeatherDataByCityName(city).toPromise();

    promise1.then((data) => {

      this.weatherData = data;
      this.weatherData1 = new Tracker (
        data.main.temp_max,
        data.main.temp_min,
      );

    }, (error) => {
      this.weatherData = error;
    });

    const promise2 = this.weatherService.getForecastDataByCityName(city).toPromise();

    promise2.then((data) => {
      this.forecastData = data;
        // get 5 day forecast data
      for (let i = 0; i < 40; i = i + 8) {
        this.fiveDaysForecastData.push({
          day: String(this.forecastData.list[i].dt_txt),
          max: String(this.forecastData.list[i].main.temp_max),
          min: String(this.forecastData.list[i].main.temp_min),
          icon: String(this.forecastData.list[i].weather[0].icon)
        });
      }
    }, (error) => {
      this.forecastData = error;
    });
  }

}
