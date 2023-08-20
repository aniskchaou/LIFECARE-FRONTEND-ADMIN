import { Component, OnInit } from '@angular/core';
import ServiceMessage from 'src/app/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/main/mocks/ServiceTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import Service from 'src/app/main/models/Service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Messages from 'src/app/main/configs/messages';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent extends URLLoader implements OnInit {
  showsummary: boolean = false;
  showgraphic: boolean = false;
  services$;
  id = 0;

  constructor(
    private serviceTestService: ServiceTestService,
    private messageService: ServiceMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.getAll();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    this.serviceTestService.ID.next(id.toString());
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
      console.log(id);
      this.setId(id);
      this.serviceTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/service/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.reloadPage();
    }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/service']);
      });
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.services$ = this.serviceTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/service/all').subscribe(
      (data: Service[]) => {
        this.services$ = data;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
