import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import DoctorTestService from 'src/app/main/mocks/DoctorTestService';
import Departement from 'src/app/main/models/Departement';
import Doctor from 'src/app/main/models/Doctor';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-medecin',
  templateUrl: './edit-medecin.component.html',
  styleUrls: ['./edit-medecin.component.css'],
})
export class EditMedecinComponent extends URLLoader implements OnInit {
  model: Doctor;
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  departements$: Departement[];

  constructor(
    private httpService: HTTPService,
    private router: Router,
    private message: DoctorMessage
  ) {
    super();
    this.model = this.create();
  }
  ngOnInit(): void {
    this.getDepartements();
  }

  create() {
    return new Doctor(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }

  ngOnChanges(changes: any) {
    this.httpService
      .get(URLS.URL_BASE + '/doctor/' + this.id)
      .subscribe((data: Doctor) => {
        this.model = data;
        console.log(this.model);
      });
  }

  edit() {
    this.httpService
      .create(URLS.URL_BASE + '/doctor/create', this.model)
      .then(() => {
        this.router
          .navigateByUrl('/dashboard', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/doctor']);
          });
        super.show('Confirmation', Messages.EDIT_CONFIRMATION_MSG, 'success');
        this.closeModal();
      });
  }

  getDepartements() {
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
    this.closeModalEvent.emit();
  }
}
