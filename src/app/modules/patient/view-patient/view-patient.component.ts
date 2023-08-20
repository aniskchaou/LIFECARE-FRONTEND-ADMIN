import { Component, Input, OnInit } from '@angular/core';
import PatientMessage from 'src/app/main/messages/PatientMessage';
import Patient from 'src/app/main/models/Patient';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css'],
})
export class ViewPatientComponent implements OnInit {
  model: Patient;
  @Input() id = undefined;

  constructor(
    private httpService: HTTPService,
    private message: PatientMessage
  ) {
    this.model = this.create();
  }

  create() {
    return new Patient(0, '', '', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/patient/' + this.id)
        .subscribe((data: Patient) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  ngOnChanges(changes: any) {
    console.log(this.id);
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/patient/' + this.id)
        .subscribe((data: Patient) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }
}
