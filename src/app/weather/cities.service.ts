import { Coordinate } from './cities.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public keyAPI = "0e80fe637c11237b97cb1ba03385a2cc";
  
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get('https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json')
  }
  
  public getWeather(Coordinate) {
    console.log(Coordinate)
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${Coordinate['lat']}&lon=${Coordinate['lng']}&appid=${this.keyAPI}`)
  }
}
