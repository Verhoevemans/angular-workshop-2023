import { Component } from '@angular/core';

@Component({
  selector: 'app-cities-edit',
  templateUrl: './cities-edit.component.html',
  styleUrls: ['./cities-edit.component.scss']
})
export class CitiesEditComponent {
  public name = '';
  public country = '';

  public addCity(): void {
    this.name = '';
    this.country = '';
  }

  public isDisabled(): boolean {
    return !this.name || !this.country;
  }
}
