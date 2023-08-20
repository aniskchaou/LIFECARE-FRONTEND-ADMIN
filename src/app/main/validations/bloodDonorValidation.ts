import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class BloodDonorValidation {
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
      Age: new FormControl('', Validators.required),
      Gender: new FormControl('', Validators.required),
      bloodGroup: new FormControl('', Validators.required),
      LastDonationDate: new FormControl('', Validators.required),
    });
  }
}
