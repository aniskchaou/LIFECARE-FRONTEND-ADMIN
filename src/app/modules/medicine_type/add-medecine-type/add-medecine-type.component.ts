import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { MedecineType } from 'src/app/main/models/MedecineType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import MedecineTypeValidation from 'src/app/main/validations/MedecineTypeValidation';

@Component({
  selector: 'app-add-medecine-type',
  templateUrl: './add-medecine-type.component.html',
  styleUrls: ['./add-medecine-type.component.css'],
})
export class AddMedecineTypeComponent extends URLLoader implements OnInit {
  medecineTypeForm: FormGroup;
  // msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: MedecineTypeValidation,
    //private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.medecineTypeForm = this.validation.formGroupInstance;
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
    return this.medecineTypeForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.medecineTypeForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/medecinetype/create',
      this.medecineTypeForm.value
    );
    // this.medecineTypeForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      Messages.ADD_CONFIRMATION_MSG,
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.router.navigate(['/medicinetype']);
    // }
  }
}
