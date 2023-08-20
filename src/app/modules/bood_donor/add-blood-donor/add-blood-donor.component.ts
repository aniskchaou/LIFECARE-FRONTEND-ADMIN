import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { BloodGroup } from 'src/app/main/models/bloodGroup';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import BloodDonorValidation from 'src/app/main/validations/bloodDonorValidation';

@Component({
  selector: 'app-add-blood-donor',
  templateUrl: './add-blood-donor.component.html',
  styleUrls: ['./add-blood-donor.component.css'],
})
export class AddBloodDonorComponent extends URLLoader implements OnInit {
  bloodDonorForm: FormGroup;
  // msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  bloodGroups$: BloodGroup[];

  constructor(
    private validation: BloodDonorValidation,
    //private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.bloodDonorForm = this.validation.formGroupInstance;
    // this.msg = this.message;
    this.getAll();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/blooddonor']);
      });
  }
  get f() {
    return this.bloodDonorForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
    this.getAll();
  }

  reset() {
    this.bloodDonorForm.reset();
  }

  add() {
    this.bloodDonorForm.value.bloodGroup = this.bloodGroups$.filter(
      (x) => x.id == parseInt(this.bloodDonorForm.value.bloodGroup)
    )[0];

    this.submitted = true;
    //if (this.validation.checkValidation()) {
    this.httpService
      .create(URLS.URL_BASE + '/blooddonor/create', this.bloodDonorForm.value)
      .then(() => {
        this.bloodDonorForm.reset();
        this.closeModal();
        this.goBack();
        super.show(
          'Confirmation',
          Messages.ADD_CONFIRMATION_MSG,
          //this.msg.addConfirmation[URLS.getInstance().getLang()],
          'success'
        );
        this.reloadPage();
      });
    // }
  }
  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/bloodgroup/all').subscribe(
      (data: BloodGroup[]) => {
        this.bloodGroups$ = data;
        console.log(data);
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
        this.router.navigate(['/blooddonor']);
      });
  }
}
