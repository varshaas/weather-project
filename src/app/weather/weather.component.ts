import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/weather.json').subscribe((data: any) => {
        console.log(data);
        this.weatherData = data
      });
  }

}
