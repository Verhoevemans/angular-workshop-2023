import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { City } from '../shared/models/city.model';

@Injectable()
export class CitiesService {
  public citiesChanged = new Subject<void>();

  public constructor(private httpClient: HttpClient) {}

  public addCity(city: City): void {
    this.httpClient.post<City>('api/cities', city).subscribe(() => {
      this.citiesChanged.next();
    });
  }

  public getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>('api/cities');
  }
}
