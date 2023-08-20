import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import BedTypeValidation from 'src/app/main/validations/BedTypeValidation';

@Component({
  selector: 'app-add-bed-type',
  templateUrl: './add-bed-type.component.html',
  styleUrls: ['./add-bed-type.component.css'],
})
export class AddBedTypeComponent extends URLLoader implements OnInit {
  bedTypeForm: FormGroup;
  //msg: BedTypeMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: BedTypeValidation,
    //private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.bedTypeForm = this.validation.formGroupInstance;
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
    return this.bedTypeForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.bedTypeForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/bedtype/create',
        this.bedTypeForm.value
      );
      this.bedTypeForm.reset();
      // this.closeModal();
      // this.goBack();
      super.show(
        'Confirmation',
        Messages.ADD_CONFIRMATION_MSG,
        // this.msg.addConfirmation[URLS.getInstance().getLang()],
        'success'
      );
    }
    this.router.navigate(['/bedtype']);
  }
}
