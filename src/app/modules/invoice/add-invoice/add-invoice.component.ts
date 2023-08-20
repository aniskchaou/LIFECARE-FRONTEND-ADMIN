import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css'],
})
export class AddInvoiceComponent extends URLLoader implements OnInit {
  invoiceForm: FormGroup;
  //msg: EmployeeMessage;
  submitted = false;

  get f() {
    return this.invoiceForm.controls;
  }

  /* constructor(
    private validation: InvoiceValidation,
    private router: Router,
    private message: InvoiceM,
    private employeeTestService: EmployeeTestService,
    private httpService: HTTPService
  ) {
    super();
    this.invoiceForm = this.validation.formGroupInstance;
   // this.msg = this.message;
  }
  */

  constructor() {
    super();
  }
  ngOnInit(): void {}

  add() {
    /* this.submitted = true;
    this.buyForm.value.supplier=this.suppliers$.filter(x => 
    x.id == parseInt(this.buyForm.value.supplier))[0]
    this.buyForm.value.product_id=this.products$.filter(x => 
    x.id == parseInt(this.buyForm.value.product_id))[0]
   */
    /*if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + URLS.URL_BASE + '/stockbay/buy/create',
        this.invoiceForm.value
      );
     // super.show('Confirmation', this.msg.confirmations.add, 'success');
      window.location.reload();
    }*/
  }
}
