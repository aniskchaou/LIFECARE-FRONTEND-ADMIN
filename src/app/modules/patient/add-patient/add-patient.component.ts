import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import PatientMessage from 'src/app/main/messages/PatientMessage';
import PatientTestService from 'src/app/main/mocks/PatientTestService';
import { BloodGroup } from 'src/app/main/models/bloodGroup';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import PatientValidation from 'src/app/main/validations/PatientValidation';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent extends URLLoader implements OnInit {
  patientForm: FormGroup;
  msg: PatientMessage;
  submitted = false;
  bloodGroups$: BloodGroup[];

  get f() {
    return this.patientForm.controls;
  }

  constructor(
    private router: Router,
    private validation: PatientValidation,
    private message: PatientMessage,
    private patientTestService: PatientTestService,
    private httpService: HTTPService
  ) {
    super();
    this.patientForm = this.validation.formGroupInstance;
    this.msg = this.message;
    this.getBooldGroups();
  }

  ngOnInit(): void {
    // super.loadScripts();
  }

  reset() {
    this.patientForm.reset();
  }

  getBooldGroups() {
    this.httpService.getAll(URLS.URL_BASE + '/bloodgroup/all').subscribe(
      (data: BloodGroup[]) => {
        this.bloodGroups$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  addTest() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.patientTestService.create(this.patientForm.value);
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success');
      this.router.navigate(['/patient']);
    }
  }

  add() {
    this.submitted = true;

    /* this.buyForm.value.supplier=this.suppliers$.filter(x => 
    x.id == parseInt(this.buyForm.value.supplier))[0]
    this.buyForm.value.product_id=this.products$.filter(x => 
    x.id == parseInt(this.buyForm.value.product_id))[0]
   */
    this.patientForm.value.bloodGroup = this.bloodGroups$.filter(
      (x) => x.id == parseInt(this.patientForm.value.bloodGroup)
    )[0];
    //if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/patient/create',
      this.patientForm.value
    );
    this.patientForm.reset();
    super.show('Confirmation', Messages.ADD_CONFIRMATION_MSG, 'success');
    //  this.router.navigate(['/patient']);
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/patient']);
      });
    console.log(this.patientForm.value);
    // window.location.reload();
    //}
  }
}
