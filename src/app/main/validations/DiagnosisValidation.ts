import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export default class DiagnosisValidation {
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
      patientHospital: new FormControl('', Validators.required),
      doctor: new FormControl(),
      DiagnosisCategory: new FormControl('', Validators.required),
      ReportNumber: new FormControl('', Validators.required),
      FastingBloodSugar: new FormControl('', Validators.required),
      Height: new FormControl(),
      Averageglucose: new FormControl('', Validators.required),
      Weight: new FormControl('', Validators.required),
      UrineSugar: new FormControl('', Validators.required),
      BloodPressure: new FormControl(),
      Diabetes: new FormControl('', Validators.required),
      Cholesterol: new FormControl('', Validators.required),
    });
  }
}
