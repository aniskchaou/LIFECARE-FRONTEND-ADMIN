import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import PaymentMessage from 'src/app/main/messages/PaymentMessage';
import PaymentTestService from 'src/app/main/mocks/PaymenttTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import PaymentValidation from 'src/app/main/validations/PaymentValidation';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css'],
})
export class AddPaymentComponent extends URLLoader implements OnInit {
  paymentForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: PaymentValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.paymentForm = this.validation.formGroupInstance;
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
    return this.paymentForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.paymentForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/payment/create',
      this.paymentForm.value
    );
    // this.paymentForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      '',
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.router.navigate(['/payment']);
    // }
  }
}
