import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class VaccinatedPeopleValidation {
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
      patient: new FormControl(),
      vaccine: new FormControl(),
      serialNo: new FormControl(),
      doseNo: new FormControl(),
      date: new FormControl(),
    });
  }
}
