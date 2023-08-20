import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class DriverValidation {
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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      license: new FormControl(),
    });
  }
}
