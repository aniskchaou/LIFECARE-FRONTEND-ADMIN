import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import BloodValidation from 'src/app/main/validations/BloodValidation';

@Component({
  selector: 'app-add-blood',
  templateUrl: './add-blood.component.html',
  styleUrls: ['./add-blood.component.css'],
})
export class AddBloodComponent extends URLLoader implements OnInit {
  bloodForm: FormGroup;
  // msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: BloodValidation,
    //  private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.bloodForm = this.validation.formGroupInstance;
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
    return this.bloodForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.bloodForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/category/create',
        this.bloodForm.value
      );
      this.bloodForm.reset();
      this.closeModal();
      this.goBack();
      super.show(
        'Confirmation',
        '',
        //  this.msg.addConfirmation[URLS.getInstance()],
        'success'
      );
    }
  }
}
