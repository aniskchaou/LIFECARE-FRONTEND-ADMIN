import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import VaccinationMessage from 'src/app/main/messages/VaccinationMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import VaccinationValidation from 'src/app/main/validations/VaccinationValidation';

@Component({
  selector: 'app-add-vaccination',
  templateUrl: './add-vaccination.component.html',
  styleUrls: ['./add-vaccination.component.css'],
})
export class AddVaccinationComponent extends URLLoader implements OnInit {
  vaccinationForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: VaccinationValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.vaccinationForm = this.validation.formGroupInstance;
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
    return this.vaccinationForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.vaccinationForm.reset();
  }

  add() {
    this.submitted = true;
    // if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/vaccination/create',
      this.vaccinationForm.value
    );
    // this.vaccinationForm.reset();
    // this.closeModal();
    // this.goBack();
    super.show(
      'Confirmation',
      Messages.ADD_CONFIRMATION_MSG,
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.router.navigate(['/vaccination']);
    // }
  }
}
