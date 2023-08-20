import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import BedtMessage from 'src/app/main/messages/BedMessage';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import { BedType } from 'src/app/main/models/BedType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import BedValidation from 'src/app/main/validations/BedValidation';

@Component({
  selector: 'app-add-bed',
  templateUrl: './add-bed.component.html',
  styleUrls: ['./add-bed.component.css'],
})
export class AddBedComponent extends URLLoader implements OnInit {
  bedForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  bedTypes$: BedType[];

  constructor(
    private validation: BedValidation,
    // private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.bedForm = this.validation.formGroupInstance;
    // this.msg = this.message;
    this.getAll();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/bed']);
      });
  }
  get f() {
    return this.bedForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  reset() {
    this.bedForm.reset();
  }

  add() {
    this.bedForm.value.bedType = this.bedTypes$.filter(
      (x) => x.id == parseInt(this.bedForm.value.bedType)
    )[0];
    this.submitted = true;
    if (this.validation.checkValidation()) {
      this.httpService.create(
        URLS.URL_BASE + '/bed/create',
        this.bedForm.value
      );
      // this.bedForm.reset();
      // this.closeModal();
      // this.goBack();
      super.show(
        'Confirmation',
        Messages.ADD_CONFIRMATION_MSG,

        'success'
      );
      this.goBack();
    }
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/bedtype/all').subscribe(
      (data: BedType[]) => {
        this.bedTypes$ = data;
        console.log(this.bedTypes$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
