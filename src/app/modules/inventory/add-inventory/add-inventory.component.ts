import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import InventoryValidation from 'src/app/main/validations/InventoryValidation';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css'],
})
export class AddInventoryComponent extends URLLoader implements OnInit {
  inventoryForm: FormGroup;
  msg: DoctorMessage;
  submitted = false;

  get f() {
    return this.inventoryForm.controls;
  }

  constructor(
    private router: Router,
    private validation: InventoryValidation,
    private message: DoctorMessage,
    //private doctorTestService: DoctorTestService,
    private httpService: HTTPService
  ) {
    super();
    this.inventoryForm = this.validation.formGroupInstance;
    this.msg = this.message;
  }

  ngOnInit(): void {}

  reset() {
    this.inventoryForm.reset();
  }

  add() {
    this.submitted = true;
    /*this.buyForm.value.supplier = this.suppliers$.filter(
      (x) => x.id == parseInt(this.buyForm.value.supplier)
    )[0];
    this.buyForm.value.product_id = this.products$.filter(
      (x) => x.id == parseInt(this.buyForm.value.product_id)
    )[0];
   */

    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/stockbay/buy/create',
        this.inventoryForm.value
      );
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success');
      window.location.reload();
    }
  }
}
