import { Component, OnInit, ViewChild } from '@angular/core';
import PatientMessage from 'src/app/main/messages/PatientMessage';

import { URLLoader } from 'src/app/main/configs/URLLoader';
import PatientTestService from 'src/app/main/mocks/PatientTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import Patient from 'src/app/main/models/Patient';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import Messages from 'src/app/main/configs/messages';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent extends URLLoader implements OnInit {
  patients$;
  id = 0;
  loading = false;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;
  constructor(
    //  private patientTestService: PatientTestService,
    private messageService: PatientMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
  }

  setId(id) {}

  edit(id) {
    this.id = id;
    console.log(id);
    // this.patientTestService.ID.next(id.toString());
  }

  closeModalEdit() {
    let element: HTMLElement = document.getElementsByClassName(
      'close'
    )[0] as HTMLElement;
    element.click();
    this.getAll();
  }

  delete(id) {
    var r = confirm(Messages.DELETE_ASK_MSG);
    if (r) {
      this.setId(id);

      this.httpService.remove(URLS.URL_BASE + '/patient/delete/' + id);
      super.show('Confirmation', Messages.DELETE_CONFIRMATION_MSG, 'success');
      this.getAll();
      // this.router.navigate(['/patient']);
    }
  }

  deleteTest(id) {
    // this.patientTestService.remove(parseInt(id));
  }

  ngOnInit() {
    //this.loadScripts();
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this.httpService.getAll(URLS.URL_BASE + '/patient/all').subscribe(
      (data: Patient[]) => {
        this.patients$ = data;
        // super.loadScripts();
        this.loading = false;
        console.log(this.patients$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getAllTest() {
    // this.patients$ = this.patientTestService.getAll();
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that.search(this['value']).draw();
          }
        });
      });
    });
  }
}
