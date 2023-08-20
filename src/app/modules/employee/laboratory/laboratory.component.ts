import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { Laboratorist } from 'src/app/main/models/Laboratorist';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css'],
})
export class LaboratoryComponent extends URLLoader implements OnInit {
  laboratories$;

  constructor(private httpService: HTTPService) {
    super();
  }

  ngOnInit() {
    super.loadScripts();
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/stockbay/buy/all').subscribe(
      (data: Laboratorist[]) => {
        this.laboratories$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  delete(id) {
    this.httpService.remove(URLS.URL_BASE + '/stockbay/buy/delete/' + id);
    super.show(
      'Confirmation',
      'this.messageService.confirmations.delete',
      'success'
    );
    window.location.reload();
  }
}
