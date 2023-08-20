import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import DiagnosisValidation from 'src/app/main/validations/DiagnosisValidation';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css'],
})
export class AddDiagnosisComponent extends URLLoader implements OnInit {
  diagnosisForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: DiagnosisValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.diagnosisForm = this.validation.formGroupInstance;
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
    return this.diagnosisForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.diagnosisForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/category/create',
      this.diagnosisForm.value
    );
    // this.diagnosisForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      '',
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    // }
  }
}
