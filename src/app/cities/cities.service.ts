import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { City } from '../shared/models/city.model';

@Injectable()
export class CitiesService {
  public citiesChanged = new Subject<City[]>();

  private cities: City[] = [
      new City('Barcelona', 'Spain'),
      new City('Venice', 'Italy')
  ];

  public addCity(city: City): void {
    this.cities.push(city);
    this.citiesChanged.next(this.cities.slice());
  }

  public getCities(): City[] {
    return this.cities.slice();
  }
}
