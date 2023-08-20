import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DocumentMessage from 'src/app/main/messages/DocumentMessage';
import DocumentTestService from 'src/app/main/mocks/DocumentTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import DocumentValidation from 'src/app/main/validations/DocumentValidation';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css'],
})
export class AddDocumentComponent extends URLLoader implements OnInit {
  documentForm: FormGroup;
  msg: DocumentMessage;
  submitted = false;

  get f() {
    return this.documentForm.controls;
  }

  constructor(
    private router: Router,
    private validation: DocumentValidation,
    private message: DocumentMessage,
    private documentTestService: DocumentTestService,
    private httpService: HTTPService
  ) {
    super();
    this.documentForm = this.validation.formGroupInstance;
    this.msg = this.message;
  }

  ngOnInit(): void {
    super.loadScripts();
  }

  reset() {
    this.documentForm.reset();
  }

  addTest() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.documentTestService.create(this.documentForm.value);
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success');
      this.router.navigate(['/document']);
    }
  }

  add() {
    /*
    this.submitted = true;
    this.buyForm.value.supplier=this.suppliers$.filter(x => 
    x.id == parseInt(this.buyForm.value.supplier))[0]
    this.buyForm.value.product_id=this.products$.filter(x => 
    x.id == parseInt(this.buyForm.value.product_id))[0]
    */

    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/document/create',
      this.documentForm.value
    );
    super.show(
      'Confirmation',
      this.message.confirmationMessages.add,
      'success'
    );
    // this.router.navigate(['/document']);
    // window.location.reload();
    // }
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/document']);
      });
  }
}
