import { Component, Input } from '@angular/core';

import { City } from '../../shared/models/city.model';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
  @Input()
  public cities: City[] | undefined;
}
