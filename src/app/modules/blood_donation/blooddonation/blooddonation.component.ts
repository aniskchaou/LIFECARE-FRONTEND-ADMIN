import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { BloodDonation } from 'src/app/main/models/BloodDonation';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-blooddonation',
  templateUrl: './blooddonation.component.html',
  styleUrls: ['./blooddonation.component.css'],
})
export class BlooddonationComponent extends URLLoader implements OnInit {
  bloodDonations$;
  id = 0;

  constructor(
    private appointmentTestService: AppointementTestService,
    private messageService: AppointementMessage,

    private httpService: HTTPService
  ) {
    super();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    this.appointmentTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm('Voulez-vous supprimer cet enregistrement ?');
    if (r) {
      this.setId(id);
      this.appointmentTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/blooddonation/delete/' + id);
      super.show(
        'Confirmation',
        this.messageService.confirmationMessages.delete,
        'success'
      );
      window.location.reload();
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.appointements$ = this.appointmentTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/blooddonation/all').subscribe(
      (data: BloodDonation[]) => {
        this.bloodDonations$ = data;
        // console.log(this.buys$)
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
