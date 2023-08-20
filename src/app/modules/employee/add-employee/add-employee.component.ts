import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import EmployeeValidation from 'src/app/main/validations/EmployeeValidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent extends URLLoader implements OnInit {
  employeeForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: EmployeeValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.employeeForm = this.validation.formGroupInstance;
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
    return this.employeeForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.employeeForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/employee/create',
        this.employeeForm.value
      );
      this.employeeForm.reset();
      this.closeModal();
      this.goBack();
      super.show(
        'Confirmation',
        '',
        //this.msg.addConfirmation[URLS.getInstance().getLang()],
        'success'
      );
    }
  }
}
