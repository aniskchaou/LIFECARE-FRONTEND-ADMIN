import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import MedecineCategoryValidation from 'src/app/main/validations/MedecineCategoryValidation';

@Component({
  selector: 'app-add-medecine-category',
  templateUrl: './add-medecine-category.component.html',
  styleUrls: ['./add-medecine-category.component.css'],
})
export class AddMedecineCategoryComponent extends URLLoader implements OnInit {
  medecineCategoryForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: MedecineCategoryValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.medecineCategoryForm = this.validation.formGroupInstance;
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
    return this.medecineCategoryForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.medecineCategoryForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService
      .create(
        URLS.URL_BASE + '/medecinecategory/create',
        this.medecineCategoryForm.value
      )
      .then(() => {
        super.show(
          'Confirmation',
          Messages.ADD_CONFIRMATION_MSG,
          //this.msg.addConfirmation[URLS.getInstance().getLang()],
          'success'
        );
        // this.router.navigate(['/medicinecategory']);
        this.reloadPage();
      });
    // this.medecineCategoryForm.reset();
    // this.closeModal();
    // this.goBack();

    // }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/medicinecategory']);
      });
  }
}
