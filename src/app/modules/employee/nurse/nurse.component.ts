import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import { Nurse } from 'src/app/main/models/Nurse';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css'],
})
export class NurseComponent extends URLLoader implements OnInit {
  nurses$;

  constructor(
    private httpService: HTTPService,
    private messageService: AppointementMessage
  ) {
    super();
  }

  ngOnInit() {
    super.loadScripts();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/nurse/all').subscribe(
      (data: Nurse[]) => {
        this.nurses$ = data;
        //console.log(this.buys$)
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  delete(id) {
    this.httpService.remove(URLS.URL_BASE + '/nurse/delete/' + id);
    super.show(
      'Confirmation',
      this.messageService.confirmationMessages.delete,
      'success'
    );
    window.location.reload();
  }
}
