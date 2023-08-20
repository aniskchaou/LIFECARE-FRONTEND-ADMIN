import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { VaccinatedPeople } from 'src/app/main/models/VaccinatedPeople';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-vaccinatedpeople',
  templateUrl: './vaccinatedpeople.component.html',
  styleUrls: ['./vaccinatedpeople.component.css'],
})
export class VaccinatedpeopleComponent extends URLLoader implements OnInit {
  vaccinatedPeoples$;
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
      //this.appointmentTestService.remove(parseInt(id))
      this.httpService.remove(URLS.URL_BASE + '/stockbay/buy/delete/' + id);
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
    this.httpService.getAll(URLS.URL_BASE + '/vaccinatedpeople/all').subscribe(
      (data: VaccinatedPeople[]) => {
        this.vaccinatedPeoples$ = data;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
