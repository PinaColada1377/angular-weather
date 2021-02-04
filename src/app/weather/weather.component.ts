import { Cities, Coordinate } from './cities.interface';
import { CitiesService } from './cities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchText: string;
  clicCity: string;
  addCitiesInterface: Cities;
  public cities;
  public allCities;
  public weather;
  name: string;
  coordinate: Coordinate;
  

  constructor( private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getAll().subscribe(cities => {
      this.cities = cities;
      this.addCities(cities);
    });
  }

  addCities(args): void {
    this.addCitiesInterface = args;
    this.allCities = this.addCitiesInterface.flatMap(el => el.regions).flatMap(el => el.cities).map(el => el.name);
  }

  selectCity(ev): void{
    this.clicCity = ev.target.textContent;
    this.addCitiesInterface[0].regions.forEach(elem => {
      elem.cities.forEach(i => {
        if (i.name === this.clicCity){
          this.coordinate = {lat: i.lat, lng: i.lng}
          this.citiesService.getWeather(this.coordinate).subscribe(weather => this.weather = weather)
        }
      })
    })
    
  }

}
