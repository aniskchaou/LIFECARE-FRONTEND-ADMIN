import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import ServiceMessage from 'src/app/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/main/mocks/ServiceTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import ServiceValidation from 'src/app/main/validations/ServiceValidation';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent extends URLLoader implements OnInit {
  serviceForm: FormGroup;
  msg: ServiceMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: ServiceValidation,
    private message: ServiceMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.serviceForm = this.validation.formGroupInstance;
    this.msg = this.message;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/service']);
      });
  }
  get f() {
    return this.serviceForm.controls;
  }

  ngOnInit(): void {
    //   this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.serviceForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService
        .create(URLS.URL_BASE + '/service/create', this.serviceForm.value)
        .then(() => {
          this.serviceForm.reset();
          // this.closeModal();
          this.goBack();
          super.show(
            'Confirmation',
            Messages.ADD_CONFIRMATION_MSG,
            //this.msg.addConfirmation[URLS.getInstance().getLang()],
            'success'
          );
        });

      //  this.router.navigate(['/service']);
    }
  }
}
