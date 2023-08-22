import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { CityForm } from '../../../shared/models/city.form.model';
import { City } from '../../../shared/models/city.model';

@Component({
  selector: 'app-cities-edit-form',
  templateUrl: './cities-edit-form.component.html',
  styleUrls: ['./cities-edit-form.component.scss']
})
export class CitiesEditFormComponent implements OnChanges {
  @Input()
  public city: City | undefined;

  @Output()
  public onAddCity = new EventEmitter<City>();

  @Output()
  public onUpdateCity = new EventEmitter<City>();

  public cityForm!: FormGroup;

  public get nameControl(): FormControl {
    return this.cityForm.get('name') as FormControl;
  }

  public get countryControl(): FormControl {
    return this.cityForm.get('country') as FormControl;
  }

  public get yearsVisited(): FormArray {
    return this.cityForm.get('yearsVisited') as FormArray;
  }

  public get yearsVisitedControls(): FormControl[] {
    return (<FormArray<FormControl>>this.cityForm.get('yearsVisited')).controls;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
    if (changes['city'] && changes['city'].currentValue) {
      this.setFormValues(changes['city'].currentValue);
    }
  }

  public addYearVisited(): void {
    this.yearsVisited.push(new FormControl());
  }

  public removeYearVisited(index: number): void {
    this.yearsVisited.removeAt(index);
    if (this.yearsVisited.value.length === 0) {
      this.addYearVisited();
    }
  }

  public onSubmit(): void {
    if (this.cityForm.valid) {
      this.city!.id
          ? this.onUpdateCity.emit(this.getCityFromForm())
          : this.onAddCity.emit(this.getCityFromForm());
    } else {
      this.markFormAsTouched();
    }
  }

  private initForm(): void {
    this.cityForm = new FormGroup<CityForm>({
      name: new FormControl('', Validators.required),
      country: new FormControl('', [Validators.required, Validators.minLength(2)]),
      yearsVisited: new FormArray([new FormControl()])
    });
  }

  private setFormValues(city: City): void {
    if (city && city.yearsVisited && city.yearsVisited.length > 1) {
      for (let i = 1; i < city.yearsVisited.length; i++) {
        this.yearsVisited.push(new FormControl());
      }
    }

    this.cityForm.patchValue({
      name: city.name,
      country: city.country,
      yearsVisited: city.yearsVisited
    });
  }

  private markFormAsTouched(): void {
    this.nameControl.markAsTouched();
    this.countryControl.markAsTouched();
  }

  private getCityFromForm(): City {
    return new City(
        this.cityForm.value.name,
        this.cityForm.value.country,
        this.cityForm.value.yearsVisited.filter(Number),
        this.city?.id
    );
  }
}
