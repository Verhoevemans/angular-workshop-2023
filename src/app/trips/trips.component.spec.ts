import { Router } from '@angular/router';
import { createSpyObj } from 'jest-createspyobj';

import { CitiesService } from '../cities/cities.service';
import { City } from '../shared/models/city.model';

import { TripsComponent } from './trips.component';

describe('TripsComponent', () => {
    let component: TripsComponent;
    let citiesServiceSpy: jest.Mocked<CitiesService>;
    let routerSpy: jest.Mocked<Router>;

    beforeEach(() => {
        citiesServiceSpy = createSpyObj(CitiesService);
        routerSpy = createSpyObj(Router);

        component = new TripsComponent(citiesServiceSpy, routerSpy);
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    describe('addCities()', () => {
        const cities: City[] = [];

        it('should not call citiesService.addCity() if input param has length 0', () => {
            component.addCities(cities);
            expect(citiesServiceSpy.addCity).not.toHaveBeenCalled();
        });

        it('should call citiesService.addCity() once if input param has length 1', () => {
            cities.push(new City('test-name', 'test-country', 'test-code'));
            component.addCities(cities);
            expect(citiesServiceSpy.addCity).toHaveBeenCalledWith(cities[0]);
        });

        it('should call citiesService.addCity() twice if input param has length 2', () => {
            cities.push(new City('test-name', 'test-country', 'test-code'));
            component.addCities(cities);
            expect(citiesServiceSpy.addCity).toHaveBeenCalledTimes(2);
        });
    });
});
