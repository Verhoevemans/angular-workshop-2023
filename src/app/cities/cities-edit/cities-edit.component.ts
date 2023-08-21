import { Component } from '@angular/core';

import { City } from '../../shared/models/city.model';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities-edit',
  templateUrl: './cities-edit.component.html',
  styleUrls: ['./cities-edit.component.scss']
})
export class CitiesEditComponent {
  public name = '';
  public country = '';

  public constructor(private citiesService: CitiesService) {}

  public addCity(): void {
    const city = new City(this.name, this.country);
    this.citiesService.addCity(city);
    this.name = '';
    this.country = '';
  }

  public isDisabled(): boolean {
    return !this.name || !this.country;
  }
}
