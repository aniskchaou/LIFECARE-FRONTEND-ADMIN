import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { Driver } from 'src/app/main/models/Driver';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import AmbulanceValidation from 'src/app/main/validations/AmbulanceValidation';

@Component({
  selector: 'app-add-ambulance',
  templateUrl: './add-ambulance.component.html',
  styleUrls: ['./add-ambulance.component.css'],
})
export class AddAmbulanceComponent extends URLLoader implements OnInit {
  ambulanceForm: FormGroup;
  //msg: AmbulanceMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  ambulanceI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  drivers$: Driver[];

  constructor(
    private validation: AmbulanceValidation,
    //  private message: AmbulanceMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.ambulanceForm = this.validation.formGroupInstance;
    // this.msg = this.message;
    this.getDrivers();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/ambulance']);
      });
  }
  get f() {
    return this.ambulanceForm.controls;
  }

  ngOnInit(): void {
    //this.getAmbulanceByLang(CONFIG.getInstance().getLang());
    this.getDrivers();
  }

  reset() {
    this.ambulanceForm.reset();
  }

  getDrivers() {
    this.httpService.getAll(URLS.URL_BASE + '/driver/all').subscribe(
      (data: Driver[]) => {
        this.drivers$ = data;
        console.log(this.drivers$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  add() {
    this.ambulanceForm.value.driver = this.drivers$.filter(
      (x) => x.id == parseInt(this.ambulanceForm.value.driver)
    )[0];
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/ambulance/create',
      this.ambulanceForm.value
    );
    console.log(this.ambulanceForm.value);
    this.ambulanceForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      Messages.ADD_CONFIRMATION_MSG,
      //this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    // this.router.navigate(['/ambulance']);
    this.reloadPage();
    // }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/ambulance']);
      });
  }
}
