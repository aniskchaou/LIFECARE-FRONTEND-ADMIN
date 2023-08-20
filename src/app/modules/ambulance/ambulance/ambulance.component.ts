import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import { Ambulance } from 'src/app/main/models/Ambulance';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css'],
})
export class AmbulanceComponent extends URLLoader implements OnInit {
  ambulances$;
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
    this.id = id;
    console.log(this.id);
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      // this.appointmentTestService.remove(parseInt(id))
      this.httpService.remove(URLS.URL_BASE + '/ambulance/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.getAll();
      this.reloadPage();
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //
    this.httpService.getAll(URLS.URL_BASE + '/ambulance/all').subscribe(
      (data: Ambulance[]) => {
        console.log(data);
        this.ambulances$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getAllTest() {
    //this.ambulances$ = this.appointmentTestService.getAll()
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/ambulance']);
      });
  }
}
