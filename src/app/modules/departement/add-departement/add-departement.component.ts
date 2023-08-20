import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DepartementMessage from 'src/app/main/messages/DepartementMessage';
import DepartementTestService from 'src/app/main/mocks/DepartementTestService';
import DepartementValidation from 'src/app/main/validations/DepartementValidation';
import { Router } from '@angular/router';
import URLS from 'src/app/main/urls/urls';
import { HTTPService } from 'src/app/main/services/HTTPService';
import Messages from 'src/app/main/configs/messages';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css'],
})
export class AddDepartementComponent extends URLLoader implements OnInit {
  departementForm: FormGroup;
  // msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: DepartementValidation,
    //private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.departementForm = this.validation.formGroupInstance;
    //this.msg = this.message;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/departement']);
      });
  }
  get f() {
    return this.departementForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.departementForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/departement/create',
      this.departementForm.value
    );
    this.departementForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      Messages.ADD_CONFIRMATION_MSG,
      //this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.goBack();
    // }
  }
}
