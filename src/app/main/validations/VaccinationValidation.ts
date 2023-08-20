import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class VaccinationValidation {
  formGroup: FormGroup;

  public get formGroupInstance(): FormGroup {
    return this.formGroup;
  }

  constructor() {
    this.formGroup = this.createFormGroup();
  }

  public checkValidation() {
    if (this.formGroup.invalid) {
      return false;
    }
    return true;
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      constractor: new FormControl(),
      commercialName: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
}
