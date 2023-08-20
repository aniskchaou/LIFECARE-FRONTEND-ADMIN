import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Link from 'src/app/main/configs/link';
import Messages from 'src/app/main/configs/messages';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import PatientMessage from 'src/app/main/messages/PatientMessage';
import PatientTestService from 'src/app/main/mocks/PatientTestService';
import Patient from 'src/app/main/models/Patient';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent extends URLLoader implements OnInit {
  model: Patient;

  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();

  constructor(
    private patientTestService: PatientTestService,
    private httpService: HTTPService,
    private message: PatientMessage
  ) {
    super();
    this.model = this.create();
  }

  create() {
    return new Patient(0, '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    console.log(this.id);
  }
  ngOnChanges(changes: any) {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/patient/' + this.id)
        .subscribe((data: Patient) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }
  getCategory() {}

  closeModal() {
    this.closeModalEvent.emit();
  }

  edit() {
    this.httpService
      .create(URLS.URL_BASE + '/patient/create', this.model)
      .then(() => {
        // this.closeModal();
        // this.goBack();
        super.show('Confirmation', Messages.EDIT_CONFIRMATION_MSG, 'success');
        this.closeModal();
      });
  }
}
