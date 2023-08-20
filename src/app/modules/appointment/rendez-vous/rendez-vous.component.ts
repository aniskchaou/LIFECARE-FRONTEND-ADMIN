import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import Appointement from 'src/app/main/models/Appointement';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css'],
})
export class RendezVousComponent extends URLLoader implements OnInit {
  appointements$;
  id = 0;

  constructor(
    //  private appointmentTestService: AppointementTestService,
    //   private messageService: AppointementMessage,
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
      //this.appointmentTestService.remove(parseInt(id))
      this.httpService.remove(URLS.URL_BASE + '/appointement/delete/' + id);
      //  .then(() => {
      super.show(
        'Confirmation',
        Messages.DELETE_CONFIRMATION_MSG,
        // this.messageService.confirmationMessages.delete,
        'success'
      );
      this.getAll();
      this.reloadPage();
      // });
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/rendezvous']);
      });
  }

  getAll() {
    // this.appointements$ = this.appointmentTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/appointement/all').subscribe(
      (data: Appointement[]) => {
        this.appointements$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
