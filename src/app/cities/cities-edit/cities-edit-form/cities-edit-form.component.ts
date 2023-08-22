import { Component, EventEmitter, Input, Output } from '@angular/core';

import { City } from '../../../shared/models/city.model';

@Component({
  selector: 'app-cities-edit-form',
  templateUrl: './cities-edit-form.component.html',
  styleUrls: ['./cities-edit-form.component.scss']
})
export class CitiesEditFormComponent {
  @Input()
  public city: City | undefined;

  @Output()
  public onAddCity = new EventEmitter<City>();

  @Output()
  public onUpdateCity = new EventEmitter<City>();

  public onSubmit(): void {
    this.city!.id
        ? this.onUpdateCity.emit(this.city)
        : this.onAddCity.emit(this.city);
  }
}
