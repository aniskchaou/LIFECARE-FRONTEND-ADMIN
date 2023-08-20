import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Prescription from 'src/app/main/models/Prescription';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent extends URLLoader implements OnInit {
  showsummary: boolean = false;
  showgraphic: boolean = false;

  prescriptions$;
  constructor(private httpService: HTTPService) {
    super();
  }

  ngOnInit() {
    super.loadScripts();
  }

  delete(id) {
    this.httpService.remove(URLS.URL_BASE + '/prescription/delete/' + id);
    super.show(
      'Confirmation',
      'this.messageService.confirmations.delete',
      'success'
    );
    window.location.reload();
  }
  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/prescription/all').subscribe(
      (data: Prescription[]) => {
        this.prescriptions$ = data;
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
