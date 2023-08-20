import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';

import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import Departement from 'src/app/main/models/Departement';
import Doctor from 'src/app/main/models/Doctor';
import Patient from 'src/app/main/models/Patient';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import AppointementValidation from 'src/app/main/validations/AppointementValidation';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
})
export class AddAppointmentComponent extends URLLoader implements OnInit {
  appointementForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  departements$: Departement[];
  doctors$: Doctor[];
  patients$: Patient[];

  constructor(
    private validation: AppointementValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.appointementForm = this.validation.formGroupInstance;
    //this.msg = this.message;
    this.getDepartements();
    this.getDoctors();
    this.getPatients();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/category']);
      });
  }

  getPatients() {
    this.httpService.getAll(URLS.URL_BASE + '/patient/all').subscribe(
      (data: Patient[]) => {
        this.patients$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getDoctors() {
    this.httpService.getAll(URLS.URL_BASE + '/doctor/all').subscribe(
      (data: Doctor[]) => {
        this.doctors$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getDepartements() {
    this.httpService.getAll(URLS.URL_BASE + '/departement/all').subscribe(
      (data: Departement[]) => {
        console.log(data);
        this.departements$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  get f() {
    return this.appointementForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(CONFIG.getInstance().getLang());
  }

  reset() {
    this.appointementForm.reset();
  }

  add() {
    this.appointementForm.value.departement_id = this.departements$.filter(
      (x) => x.id == parseInt(this.appointementForm.value.departement_id)
    )[0];

    this.appointementForm.value.doctor_id = this.doctors$.filter(
      (x) => x.id == parseInt(this.appointementForm.value.doctor_id)
    )[0];

    this.appointementForm.value.patient_id = this.patients$.filter(
      (x) => x.id == parseInt(this.appointementForm.value.patient_id)
    )[0];
    console.log(this.appointementForm.value);
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService
      .create(
        URLS.URL_BASE + '/appointement/create',
        this.appointementForm.value
      )
      .then(() => {
        this.appointementForm.reset();
        // this.closeModal();
        // this.goBack();
        super.show('Confirmation', Messages.ADD_CONFIRMATION_MSG, 'success');
        this.reloadPage();
      });

    // }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/rendezvous']);
      });
  }
}
