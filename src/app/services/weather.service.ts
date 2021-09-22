import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tracker } from '../models/tracker.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl: string = 'https://api.openweathermap.org/data/2.5/forecast';
  private appId = 'c13ff098c26cfa9e0dd0f0f8483c070b';

  weather: Tracker[] = [];
  constructor(private http: HttpClient) { }


  getWeatherDataByCityName(city: string) {
    const params = new HttpParams()
    .set('q', city).set('units', 'metric').set('appid', this.appId);

    return this.http.get(this.weatherUrl, { params });
  }

  getForecastDataByCityName(city: string) {
    const params = new HttpParams()
    .set('q', city).set('units', 'metric').set('appid', this.appId);

    return this.http.get(this.forecastUrl, { params });
  }


}
