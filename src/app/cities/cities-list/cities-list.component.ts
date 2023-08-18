import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { City } from '../../shared/models/city.model';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {
  @Input()
  public cities: City[] | undefined;

  public constructor(private router: Router, private route: ActivatedRoute) {}

  public editCity(index: number) {
    this.router.navigate(['edit', index], { relativeTo: this.route });
  }
}
