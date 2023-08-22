import { FormArray, FormControl } from '@angular/forms';

export interface CityForm {
    name: FormControl<string | null>;
    country: FormControl<string | null>;
    yearsVisited: FormArray<FormControl<number | null>>;
}
