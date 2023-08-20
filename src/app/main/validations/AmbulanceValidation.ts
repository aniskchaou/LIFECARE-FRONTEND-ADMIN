import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class AmbulanceValidation {
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
      vehicleNumber: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      year: new FormControl(),
      driver: new FormControl('', Validators.required),
      note: new FormControl('', Validators.required),
    });
  }
}
