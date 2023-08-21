import { Component } from '@angular/core';

import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  public cities: City[] = [
      new City('Vienna', 'Austria'),
      new City('Florence', 'Italy')
  ];

  public addCity(city: City): void {
    this.cities.push(city);
  }
}
