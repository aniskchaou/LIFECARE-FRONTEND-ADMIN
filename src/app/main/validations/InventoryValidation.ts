import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class InventoryValidation {
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
      itemCategory: new FormControl(),
      unit: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
}
