import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

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

  public getCity(id: number): Observable<City> {
    return this.httpClient.get<City>(`api/cities/${id}`);
  }

  public updateCity(city: City): Observable<City> {
    return this.httpClient.put<City>(`api/cities/${city.id}`, city)
      .pipe(
        tap(() => this.citiesChanged.next())
      );
  }

  public deleteCity(id: number): Observable<void> {
    return this.httpClient.delete<void>(`api/cities/${id}`)
      .pipe(
        tap(() => this.citiesChanged.next())
      );
  }
}
