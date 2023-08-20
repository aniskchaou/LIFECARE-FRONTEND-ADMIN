import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class MedicamentValidation {
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
      category: new FormControl('', Validators.required),
      description: new FormControl(),
      expireDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }
}
