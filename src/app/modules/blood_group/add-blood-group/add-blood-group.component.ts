import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import BloodGroupValidation from 'src/app/main/validations/bloodgroupValidation';

@Component({
  selector: 'app-add-blood-group',
  templateUrl: './add-blood-group.component.html',
  styleUrls: ['./add-blood-group.component.css'],
})
export class AddBloodGroupComponent extends URLLoader implements OnInit {
  bloodGroupForm: FormGroup;
  // msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;

  constructor(
    private validation: BloodGroupValidation,
    //private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.bloodGroupForm = this.validation.formGroupInstance;
    //this.msg = this.message;
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/bloodgroup']);
      });
  }
  get f() {
    return this.bloodGroupForm.controls;
  }

  ngOnInit(): void {
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.bloodGroupForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/bloodgroup/create',
        this.bloodGroupForm.value
      );
      // this.bloodGroupForm.reset();
      // this.closeModal();
      console.log(this.bloodGroupForm.value);

      super.show(
        'Confirmation',
        Messages.ADD_CONFIRMATION_MSG,
        //this.msg.addConfirmation[URLS.getInstance().getLang()],
        'success'
      );
      // this.router.navigate(['/bloodgroup']);
      this.goBack();
    }
  }
}
