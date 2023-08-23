import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { createSpyObj } from 'jest-createspyobj';
import { of } from 'rxjs';

import { City } from '../../../shared/models/city.model';

import { CitiesEditFormComponent } from './cities-edit-form.component';
import { CountryCodeValidator } from './validators/country-code.validator';

describe('CitiesEditFormComponent', () => {
    let component: CitiesEditFormComponent;
    let fixture: ComponentFixture<CitiesEditFormComponent>;
    let countryCodeValidatorSpy: jest.Mocked<CountryCodeValidator>;

    const change = {
        city: {
            previousValue: null,
            currentValue: new City('name', 'country', 'code', [2001]),
            firstChange: true
        } as SimpleChange
    };

    beforeEach(() => {
        countryCodeValidatorSpy = createSpyObj(CountryCodeValidator);
        countryCodeValidatorSpy.validate.mockReturnValue(of(null));

        TestBed.configureTestingModule({
            declarations: [
                CitiesEditFormComponent
            ],
            imports: [
                ReactiveFormsModule
            ],
            providers: [
                { provide: CountryCodeValidator, useValue: countryCodeValidatorSpy }
            ]
        });
        fixture = TestBed.createComponent(CitiesEditFormComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should have all input fields present on the page', () => {
        component.ngOnChanges(change);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('#country')).toBeVisible();
        expect(fixture.nativeElement.querySelector('#name')).toBeVisible();
        expect(fixture.nativeElement.querySelector('#countryCode')).toBeVisible();
        expect(fixture.nativeElement.querySelector('#yearsVisited')).toBeVisible();
    });

    it('should add multiple yearsVisited input fields', () => {
        component.ngOnChanges(change);
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('#yearsVisited').length).toBe(1);
        const addButton = fixture.nativeElement.querySelector('#addYearsVisited');
        addButton.click();
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('#yearsVisited').length).toBe(2);
    });
});
