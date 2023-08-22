import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { City } from '../../shared/models/city.model';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-cities-edit',
  templateUrl: './cities-edit.component.html',
  styleUrls: ['./cities-edit.component.scss']
})
export class CitiesEditComponent implements OnInit {
  public city: City | undefined;

  public constructor(private citiesService: CitiesService, private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.getCity(params['id']);
      } else {
        this.city = new City('', '', '');
      }
    });
  }

  public addCity(city: City): void {
    this.citiesService.addCity(city);
    this.router.navigate(['cities']);
  }

  public deleteCity(): void {
    this.citiesService.deleteCity(this.city!.id!).subscribe(() => {
      this.router.navigate(['cities']);
    });
  }

  public updateCity(city: City): void {
    this.citiesService.updateCity(city).subscribe(() => {
      this.router.navigate(['cities']);
    });
  }

  private getCity(id: number): void {
    this.citiesService.getCity(id).subscribe((city) => {
      this.city = city;
    });
  }
}
