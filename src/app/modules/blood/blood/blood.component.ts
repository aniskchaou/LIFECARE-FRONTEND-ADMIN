import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { Blood } from 'src/app/main/models/Blood';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css'],
})
export class BloodComponent extends URLLoader implements OnInit {
  bloods$;
  id = 0;

  constructor(
    private httpService: HTTPService,
    private appointmentTestService: AppointementTestService,
    private messageService: AppointementMessage
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
    var r = confirm('Are you sure to delete ?');
    if (r) {
      this.setId(id);
      this.httpService.remove(URLS.URL_BASE + '/blood/delete/' + id);
      super.show(
        'Confirmation',
        this.messageService.confirmationMessages.delete,
        'success'
      );
      window.location.reload();
    }
  }

  deleteTest(id) {
    this.appointmentTestService.remove(parseInt(id));
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //
    this.httpService.getAll(URLS.URL_BASE + '/blood/all').subscribe(
      (data: Blood[]) => {
        this.bloods$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getAllTest() {
    this.bloods$ = this.appointmentTestService.getAll();
  }
}
