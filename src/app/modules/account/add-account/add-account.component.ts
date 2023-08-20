import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AccountMessage from 'src/app/main/messages/AccountMessage';
import AccountTestService from 'src/app/main/mocks/AccountTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import AccountValidation from 'src/app/main/validations/AccountValidation';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent extends URLLoader implements OnInit {
  accountForm: FormGroup;
  msg: AccountMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  accountI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: AccountValidation,
    private message: AccountMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.accountForm = this.validation.formGroupInstance;
    this.msg = this.message;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/account']);
      });
  }
  get f() {
    return this.accountForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(CONFIG.getInstance().getLang());
  }

  reset() {
    this.accountForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/account/create',
        this.accountForm.value
      );
      this.accountForm.reset();
      this.closeModal();
      this.goBack();
      super.show(
        'Confirmation',
        '',
        //this.msg.addConfirmation[CONFIG.getInstance().getLang()],
        'success'
      );
    }
  }
}
