import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';

import { RestCountry } from '../../../../shared/models/rest-country.model';

@Injectable({
    providedIn: 'root'
})
export class CountryCodeValidator implements AsyncValidator {
    private readonly REST_COUNTRIES_URL = 'https://restcountries.com/v3.1/alpha';

    public constructor(private httpClient: HttpClient) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const country = control.get('country');
        const countryCode = control.get('countryCode');

        if (country && countryCode) {
            return this.httpClient
                .get<RestCountry[]>(`${this.REST_COUNTRIES_URL}/${countryCode.value}`)
                .pipe(
                    delay(500),
                    map((countryData) => {
                        if (countryData[0].name.common === country.value) {
                            return null;
                        } else {
                            return { countryCode: true };
                        }
                    }),
                    catchError(() => of({ countryCode: true }))
                );
        } else {
            return of(null);
        }
    }
}
