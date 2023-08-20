import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { MedecineType } from 'src/app/main/models/MedecineType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-medicinetype',
  templateUrl: './medicinetype.component.html',
  styleUrls: ['./medicinetype.component.css'],
})
export class MedicinetypeComponent extends URLLoader implements OnInit {
  medecineTypes$;
  id = 0;

  constructor(
    private appointmentTestService: AppointementTestService,
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
    this.appointmentTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      this.httpService.remove(URLS.URL_BASE + '/medecinetype/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      // window.location.reload();
      this.reloadPage();
    }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/medicinetype']);
      });
  }

  deleteTest(id) {}

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/medecinetype/all').subscribe(
      (data: any[]) => {
        this.medecineTypes$ = data;
        console.log(this.medecineTypes$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getAllTest() {}
}
