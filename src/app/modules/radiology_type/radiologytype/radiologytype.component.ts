import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { RadiologyType } from 'src/app/main/models/RadiologyType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-radiologytype',
  templateUrl: './radiologytype.component.html',
  styleUrls: ['./radiologytype.component.css'],
})
export class RadiologytypeComponent extends URLLoader implements OnInit {
  radiologyTypes$ = [{}];
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
    // this.appointements$ = this.appointmentTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/radiologytype/all').subscribe(
      (data: RadiologyType[]) => {
        this.radiologyTypes$ = data;
        console.log(this.radiologyTypes$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
