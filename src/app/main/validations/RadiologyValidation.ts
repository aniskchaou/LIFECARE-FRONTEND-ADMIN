import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class RadiologyValidation {
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
      testName: new FormControl('', Validators.required),
      radiologyType: new FormControl(),
      name: new FormControl('', Validators.required),
      reportDays: new FormControl('', Validators.required),
      standardCharge: new FormControl('', Validators.required),
    });
  }
}
