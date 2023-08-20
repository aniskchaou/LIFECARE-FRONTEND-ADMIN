import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { Bed } from 'src/app/main/models/Bed';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css'],
})
export class BedComponent extends URLLoader implements OnInit {
  beds$ = [{}];
  id = 0;

  constructor(
    //  private appointmentTestService: AppointementTestService,
    private messageService: AppointementMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
  }

  closeModal() {
    let element: HTMLElement = document.getElementsByClassName(
      'close'
    )[0] as HTMLElement;
    element.click();
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
      this.httpService.remove(URLS.URL_BASE + '/bed/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.router
        .navigateByUrl('/dashboard', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/bed']);
        });
    }
  }

  deleteAllTest() {}

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/bed/all').subscribe(
      (data: Bed[]) => {
        this.beds$ = data;
        console.log(this.beds$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getAllTest() {}
}
