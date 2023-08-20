import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import Service from 'src/app/main/models/Service';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css'],
})
export class EditServiceComponent extends URLLoader implements OnInit {
  model: Service;

  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();

  constructor(
    //private patientTestService: PatientTestService,
    private httpService: HTTPService,
    private router: Router //private message: PatientMessage
  ) {
    super();
    this.model = this.create();
  }

  create() {
    return new Service(0, '', '', '', '', '');
  }

  ngOnInit(): void {
    console.log(this.id);
  }
  ngOnChanges(changes: any) {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/service/' + this.id)
        .subscribe((data: Service) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }
  getCategory() {}

  closeModal() {
    this.closeModalEvent.emit();
  }

  edit() {
    console.log(this.model);
    this.httpService
      .create(URLS.URL_BASE + '/service/create', this.model)
      .then(() => {
        this.closeModal();
        this.goBack();
        super.show('Confirmation', Messages.EDIT_CONFIRMATION_MSG, 'success');
      });
    // this.closeModal();
    //this.goBack();
    /*  super.show(
      'Confirmation',
      this.message.confirmationMessages.edit,
      'success'
    ); */
  }
  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/service']);
      });
  }
}
