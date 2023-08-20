import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import { Vaccination } from 'src/app/main/models/Vaccination';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css'],
})
export class VaccinationComponent extends URLLoader implements OnInit {
  vaccinations$;
  id = 0;

  constructor(
    private httpService: HTTPService,
    private messageService: AppointementMessage,
    private router: Router
  ) {
    super();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    //this.appointmentTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      //this.appointmentTestService.remove(parseInt(id))
      this.httpService.remove(URLS.URL_BASE + '/vaccination/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.goBack();
    }
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/vaccination']);
      });
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.appointements$ = this.appointmentTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/vaccination/all').subscribe(
      (data: Vaccination[]) => {
        this.vaccinations$ = data;
        console.log(this.vaccinations$);
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
