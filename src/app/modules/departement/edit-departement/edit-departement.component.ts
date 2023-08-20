import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import DepartementMessage from 'src/app/main/messages/DepartementMessage';
import DepartementTestService from 'src/app/main/mocks/DepartementTestService';
import Departement from 'src/app/main/models/Departement';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css'],
})
export class EditDepartementComponent extends URLLoader implements OnInit {
  model: Departement;
  @Input() id;
  @Output() closeModalEvent = new EventEmitter<string>();

  constructor(
    private departementTestService: DepartementTestService,
    private message: DepartementMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.model = this.create();
  }

  create() {
    return new Departement(0, '', '');
  }

  ngOnInit(): void {
    this.departementTestService.ID.subscribe((idd) => {
      this.model = this.departementTestService.get(parseInt(idd));
      if (this.model == undefined) {
        this.model = this.model = this.create();
      }
    });
  }

  edit() {
    this.httpService
      .create(URLS.URL_BASE + '/departement/create', this.model)
      .then(() => {
        this.closeModalEvent.emit();
        super.show('Confirmation', Messages.EDIT_CONFIRMATION_MSG, 'success');
        this.router
          .navigateByUrl('/dashboard', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/departement']);
          });
      });
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/departement/' + this.id)
        .subscribe((data: Departement) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }
}
