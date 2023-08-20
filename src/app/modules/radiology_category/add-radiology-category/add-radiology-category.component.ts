import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import RadiologyCategoryValidation from 'src/app/main/validations/RadiologyCategoryValidation';

@Component({
  selector: 'app-add-radiology-category',
  templateUrl: './add-radiology-category.component.html',
  styleUrls: ['./add-radiology-category.component.css'],
})
export class AddRadiologyCategoryComponent extends URLLoader implements OnInit {
  radiologyCategoryForm: FormGroup;
  // msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: RadiologyCategoryValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.radiologyCategoryForm = this.validation.formGroupInstance;
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
    return this.radiologyCategoryForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.radiologyCategoryForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/radiologycategory/create',
      this.radiologyCategoryForm.value
    );
    this.radiologyCategoryForm.reset();
    this.closeModal();
    this.goBack();
    super.show(
      'Confirmation',
      '',
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.router.navigate(['/radiologycategory']);
    // }
  }
}
