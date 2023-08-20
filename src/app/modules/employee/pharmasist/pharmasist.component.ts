import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { Pharmasist } from 'src/app/main/models/Pharmasist';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-pharmasist',
  templateUrl: './pharmasist.component.html',
  styleUrls: ['./pharmasist.component.css'],
})
export class PharmasistComponent extends URLLoader implements OnInit {
  pharmasists$;

  constructor(private httpService: HTTPService) {
    super();
  }

  ngOnInit() {
    super.loadScripts();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/pharmacist/all').subscribe(
      (data: Pharmasist[]) => {
        this.pharmasists$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  delete(id) {
    this.httpService.remove(URLS.URL_BASE + '/pharmacist/delete/' + id);
    super.show(
      'Confirmation',
      'this.messageService.confirmations.delete',
      'success'
    );
    window.location.reload();
  }
}
