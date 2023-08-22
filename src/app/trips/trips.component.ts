import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CitiesService } from '../cities/cities.service';
import { City } from '../shared/models/city.model';
import { Trip } from '../shared/models/trip.model';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent {
  public trips: Trip[] = [
    {
      title: 'Summer 2023',
      cities: [
        new City('Florence', 'Italy', 'IT'),
        new City('Vienna', 'Austria', 'AU')
      ]
    },
    {
      title: 'Spring 2022',
      cities: [
        new City('Barcelona', 'Spain', 'ES'),
        new City('Madrid', 'Spain', 'ES'),
        new City('Valencia', 'Spain', 'ES')
      ]
    }
  ];

  public constructor(private citiesService: CitiesService, private router: Router) {}

  public addCities(cities: City[]): void {
    cities.forEach((city) => {
      this.citiesService.addCity(city);
    });
    this.router.navigate(['cities']);
  }
}
