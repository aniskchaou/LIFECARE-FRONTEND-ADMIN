import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { Driver } from 'src/app/main/models/Driver';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent extends URLLoader implements OnInit {
  drivers$: Driver[] = [
    {
      id: 1,
      firstName: ';jnbk',
      lastName: 'khbk',
      age: ',hb;j',
      gender: ';jnbkj',
      email: 'jb',
      phone: 'rf',
      address: 'ggg',
      license: 'jk',
    },
  ];
  id = 0;

  constructor(
    private appointmentTestService: AppointementTestService,
    private messageService: AppointementMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    // this.appointmentTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      //this.appointmentTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/driver/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.reloadPage();
    }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/driver']);
      });
  }

  closeModal() {
    let element: HTMLElement = document.getElementsByClassName(
      'close'
    )[0] as HTMLElement;
    element.click();
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.appointements$ = this.appointmentTestService.getAll()

    this.httpService.getAll(URLS.URL_BASE + '/driver/all').subscribe(
      (data: Driver[]) => {
        this.drivers$ = data;
        console.log(this.drivers$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
