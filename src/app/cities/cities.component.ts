import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { City } from '../shared/models/city.model';

import { CitiesService } from './cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit, OnDestroy {
  public cities: City[] | undefined;

  private onDestroy = new Subject<void>();

  public constructor(private citiesService: CitiesService) {}

  public ngOnInit(): void {
    this.getCities();

    this.citiesService.citiesChanged
      .pipe(
        takeUntil(this.onDestroy)
      ).subscribe(() => {
        this.getCities();
      });
  }

  public ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  private getCities(): void {
    this.citiesService.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }
}
