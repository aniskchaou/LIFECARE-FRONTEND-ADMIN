import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import RadiologyValidation from 'src/app/main/validations/RadiologyValidation';

@Component({
  selector: 'app-add-radiology',
  templateUrl: './add-radiology.component.html',
  styleUrls: ['./add-radiology.component.css'],
})
export class AddRadiologyComponent extends URLLoader implements OnInit {
  radiologyForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: RadiologyValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.radiologyForm = this.validation.formGroupInstance;
    //this.msg = this.message;
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
    return this.radiologyForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.radiologyForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/radiology/create',
      this.radiologyForm.value
    );
    this.radiologyForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      '',
      //this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.router.navigate(['/radiology']);
    // }
  }
}
