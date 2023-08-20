import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { Ambulance } from 'src/app/main/models/Ambulance';
import { Driver } from 'src/app/main/models/Driver';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-ambulance',
  templateUrl: './edit-ambulance.component.html',
  styleUrls: ['./edit-ambulance.component.css'],
})
export class EditAmbulanceComponent extends URLLoader implements OnInit {
  model: Ambulance = new Ambulance(0, '', '', '', '', '');
  @Input() id;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  drivers$: Driver[];

  constructor(
    //private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    // private message: CategoryMessage,
    private router: Router
  ) {
    super();
    console.log(this.id);
    this.id = 1;
    this.model = new Ambulance(0, '', '', '', '', '');
    this.getDrivers();
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/ambulance']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
  }
  ngOnChanges(changes: any) {
    this.getCategory();
  }

  getCategory() {
    if (this.id != undefined || this.id != '0') {
      this.httpService
        .get(URLS.URL_BASE + '/ambulance/' + this.id)
        .subscribe((data: Ambulance) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  getDrivers() {
    this.httpService.getAll(URLS.URL_BASE + '/driver/all').subscribe(
      (data: Driver[]) => {
        this.drivers$ = data;
        console.log(this.drivers$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  edit() {
    this.httpService
      .create(URLS.URL_BASE + '/ambulance/create', this.model)
      .then(() => {
        this.closeModal();
        this.goBack();
        super.show(
          'Confirmation',
          Messages.EDIT_CONFIRMATION_MSG,
          //   this.message.confirmationMessages.edit,
          'success'
        );
        //this.closeModal();
      });
  }
}
