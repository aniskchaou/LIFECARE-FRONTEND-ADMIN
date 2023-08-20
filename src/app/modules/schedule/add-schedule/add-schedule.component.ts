import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css'],
})
export class AddScheduleComponent implements OnInit {
  /*  doctorForm: FormGroup;
  msg: DoctorMessage;
  submitted = false;

  get f() {
    return this.doctorForm.controls;
  }

  constructor(
    private router: Router,
    private validation: DoctorValidation,
    private message: DoctorMessage,
    private doctorTestService: DoctorTestService,
    private httpService: HTTPService
  ) {
    super();
    this.doctorForm = this.validation.formGroupInstance;
    this.msg = this.message;
  }

  ngOnInit(): void {}

  reset() {
    this.doctorForm.reset();
  }

  add() {
    this.submitted = true;
    this.buyForm.value.supplier = this.suppliers$.filter(
      (x) => x.id == parseInt(this.buyForm.value.supplier)
    )[0];
    this.buyForm.value.product_id = this.products$.filter(
      (x) => x.id == parseInt(this.buyForm.value.product_id)
    )[0];

    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + URLS.URL_PORT + '/stockbay/buy/create',
        this.buyForm.value
      );
      super.show('Confirmation', this.msg.confirmations.add, 'success');
      window.location.reload();
    }
  }
  */
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
