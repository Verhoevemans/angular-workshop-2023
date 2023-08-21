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
    this.cities = this.citiesService.getCities();

    this.citiesService.citiesChanged.pipe(
      takeUntil(this.onDestroy)
    ).subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
