import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import RadiologyTypeValidation from 'src/app/main/validations/RadiologyTypeValidation';

@Component({
  selector: 'app-add-radiology-type',
  templateUrl: './add-radiology-type.component.html',
  styleUrls: ['./add-radiology-type.component.css'],
})
export class AddRadiologyTypeComponent extends URLLoader implements OnInit {
  radiologyTypeForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: RadiologyTypeValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.radiologyTypeForm = this.validation.formGroupInstance;
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
    return this.radiologyTypeForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.radiologyTypeForm.reset();
  }

  add() {
    this.submitted = true;
    //  if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/radiologytype/create',
      this.radiologyTypeForm.value
    );
    this.radiologyTypeForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      '',
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.router.navigate(['/radiologytype']);
    // }
  }
}
