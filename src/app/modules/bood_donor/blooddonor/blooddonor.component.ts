import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import { BloodDonor } from 'src/app/main/models/BloodDonor';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-blooddonor',
  templateUrl: './blooddonor.component.html',
  styleUrls: ['./blooddonor.component.css'],
})
export class BlooddonorComponent extends URLLoader implements OnInit {
  bloodDonors$: BloodDonor[];
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
  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/blooddonor']);
      });
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);

      this.httpService.remove(URLS.URL_BASE + '/blooddonor/delete/' + id);
      super.show('Confirmation', Messages.EDIT_CONFIRMATION_MSG, 'success');
      this.reloadPage();
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.appointements$ = this.appointmentTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/blooddonor/all').subscribe(
      (data: BloodDonor[]) => {
        this.bloodDonors$ = data;
        //console.log(this.buys$)
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
