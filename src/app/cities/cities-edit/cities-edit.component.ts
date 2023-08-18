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
  public name = '';
  public country = '';
  public cityIndex: number | undefined;

  public constructor(private citiesService: CitiesService, private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.cityIndex = +params['id'];
        this.setCity(this.cityIndex);
      }
    });
  }

  public isDisabled(): boolean {
    return !this.name || !this.country;
  }

  public addCity(): void {
    const city = new City(this.name, this.country);
    this.citiesService.addCity(city);
    this.name = '';
    this.country = '';
  }

  public deleteCity(): void {
    this.citiesService.deleteCity(this.cityIndex!).subscribe(() => {
      this.router.navigate(['cities']);
    });
  }

  public updateCity(): void {
    this.citiesService.updateCity(this.cityIndex!, new City(this.name, this.country)).subscribe(() => {
      this.router.navigate(['cities']);
    });
  }

  private setCity(id: number): void {
    this.citiesService.getCity(id).subscribe((city) => {
      this.name = city.name;
      this.country = city.country;
    });
  }
}
