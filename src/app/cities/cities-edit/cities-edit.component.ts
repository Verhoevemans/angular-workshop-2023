import { Component, EventEmitter, Output } from '@angular/core';

import { City } from '../../shared/models/city.model';

@Component({
  selector: 'app-cities-edit',
  templateUrl: './cities-edit.component.html',
  styleUrls: ['./cities-edit.component.scss']
})
export class CitiesEditComponent {
  @Output()
  public onAddCity = new EventEmitter<City>();

  public name = '';
  public country = '';

  public addCity(): void {
    this.onAddCity.emit(new City(this.name, this.country));
    this.name = '';
    this.country = '';
  }

  public isDisabled(): boolean {
    return !this.name || !this.country;
  }
}
