import { Component, OnInit } from '@angular/core';
import DepartementMessage from 'src/app/main/messages/DepartementMessage';
import DepartementTestService from 'src/app/main/mocks/DepartementTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Departement from 'src/app/main/models/Departement';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Messages from 'src/app/main/configs/messages';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css'],
})
export class DepartementComponent extends URLLoader implements OnInit {
  departements$;
  id = 0;

  constructor(
    private departementTestService: DepartementTestService,
    private messageService: DepartementMessage,
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
    this.departementTestService.ID.next(id.toString());
    console.log(id);
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);
      this.departementTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/departement/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.reloadPage();
    }
  }

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/departement']);
      });
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/departement/all').subscribe(
      (data: Departement[]) => {
        this.departements$ = data;
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
