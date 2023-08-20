import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import DoctorTestService from 'src/app/main/mocks/DoctorTestService';
import Doctor from 'src/app/main/models/Doctor';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css'],
})
export class MedecinComponent extends URLLoader implements OnInit {
  doctors$;
  id = 0;

  constructor(
    private doctorTestService: DoctorTestService,
    private messageService: DoctorMessage,
    private httpService: HTTPService
  ) {
    super();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    this.doctorTestService.ID.next(id.toString());
  }

  closeModal() {
    let element: HTMLElement = document.getElementsByClassName(
      'close'
    )[0] as HTMLElement;
    element.click();
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      this.doctorTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/doctor/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      window.location.reload();
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.doctors$ = this.doctorTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/doctor/all').subscribe(
      (data: Doctor[]) => {
        this.doctors$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
