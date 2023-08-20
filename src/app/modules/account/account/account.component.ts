import { Component, OnInit } from '@angular/core';
import AccountMessage from 'src/app/main/messages/AccountMessage';
import AccountTestService from 'src/app/main/mocks/AccountTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HTTPService } from 'src/app/main/services/HTTPService';
import { HttpErrorResponse } from '@angular/common/http';
import Account from 'src/app/main/models/Account';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent extends URLLoader implements OnInit {
  accounts$;
  id = 0;

  constructor(
    private accountTestService: AccountTestService,
    private messageService: AccountMessage,
    private httpService: HTTPService
  ) {
    super();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    this.accountTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm('Voulez-vous supprimer cet enregistrement ?');
    if (r) {
      this.setId(id);

      this.httpService.remove(URLS.URL_BASE + '/stockbay/buy/delete/' + id);
      super.show(
        'Confirmation',
        this.messageService.confirmationMessages.delete,
        'success'
      );
      window.location.reload();
    }
  }

  deleteTest(id) {
    this.accountTestService.remove(parseInt(id));
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  gestAllTest() {
    this.accounts$ = this.accountTestService.getAll();
  }

  getAll() {
    //
    this.httpService.getAll(URLS.URL_BASE + '/account/all').subscribe(
      (data: Account[]) => {
        this.accounts$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
