import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { Recepionist } from 'src/app/main/models/Recipionist';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-recepionist',
  templateUrl: './recepionist.component.html',
  styleUrls: ['./recepionist.component.css'],
})
export class RecepionistComponent extends URLLoader implements OnInit {
  receptionists$;

  constructor(private httpService: HTTPService) {
    super();
  }

  ngOnInit() {
    super.loadScripts();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/recipionist/all').subscribe(
      (data: Recepionist[]) => {
        this.receptionists$ = data;
        // console.log(this.buys$)
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  delete(id) {
    this.httpService.remove(URLS.URL_BASE + '/recipionist/delete/' + id);
    super.show(
      'Confirmation',
      ' this.messageService.confirmations.delete',
      'success'
    );
    window.location.reload();
  }
}
