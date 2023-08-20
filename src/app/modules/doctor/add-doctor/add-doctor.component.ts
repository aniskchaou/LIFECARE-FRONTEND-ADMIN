import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import DoctorTestService from 'src/app/main/mocks/DoctorTestService';
import Category from 'src/app/main/models/Category';
import Departement from 'src/app/main/models/Departement';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import DoctorValidation from 'src/app/main/validations/DoctorValidation';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent extends URLLoader implements OnInit {
  doctorForm: FormGroup;
  //  msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  departements$: Departement[];

  constructor(
    private validation: DoctorValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.doctorForm = this.validation.formGroupInstance;
    // this.msg = this.message;
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
  get f() {
    return this.doctorForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
    this.getDepartements();
  }

  reset() {
    this.doctorForm.reset();
  }

  add() {
    this.doctorForm.value.departement_id = this.departements$.filter(
      (x) => x.id == parseInt(this.doctorForm.value.departement_id)
    )[0];
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/doctor/create',
      this.doctorForm.value
    );
    this.doctorForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      Messages.ADD_CONFIRMATION_MSG,
      //this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    console.log(this.doctorForm.value);
    this.reloadPage();
    // }
  }

  getDepartements() {
    this.httpService.getAll(URLS.URL_BASE + '/departement/all').subscribe(
      (data: Departement[]) => {
        this.departements$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/doctor']);
      });
  }
}
