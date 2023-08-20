import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { BedType } from 'src/app/main/models/BedType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-bedtype',
  templateUrl: './bedtype.component.html',
  styleUrls: ['./bedtype.component.css'],
})
export class BedtypeComponent extends URLLoader implements OnInit {
  bedTypes$;
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
    this.appointmentTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      this.appointmentTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/bedtype/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.reloadPage();
    }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/bedtype']);
      });
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/bedtype/all').subscribe(
      (data: BedType[]) => {
        this.bedTypes$ = data;
        console.log(this.bedTypes$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  closeModal() {
    let element: HTMLElement = document.getElementsByClassName(
      'close'
    )[0] as HTMLElement;
    element.click();
  }
}
