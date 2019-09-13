import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {
  constructor() {}

  markFormControlAsDirty(formControl: FormControl) {
    formControl.markAsDirty();
    formControl.markAsTouched();
  }

  markFormGroupAsDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      switch (formGroup.get(key).constructor.name) {
        case 'FormGroup':
          this.markFormGroupAsDirty(formGroup.get(key) as FormGroup);
          break;
        case 'FormArray':
          this.markFormArrayAsDirty(formGroup.get(key) as FormArray);
          break;
        case 'FormControl':
          this.markFormControlAsDirty(formGroup.get(key) as FormControl);
          break;
      }
    });
  }

  markFormArrayAsDirty(formArray: FormArray) {
    formArray.controls.forEach(control => {
      switch (control.constructor.name) {
        case 'FormGroup':
          this.markFormGroupAsDirty(control as FormGroup);
          break;
        case 'FormArray':
          this.markFormArrayAsDirty(control as FormArray);
          break;
        case 'FormControl':
          this.markFormControlAsDirty(control as FormControl);
          break;
      }
    });
  }
}
