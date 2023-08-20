import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Appointement from 'src/app/main/models/Appointement';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-appointement',
  templateUrl: './edit-appointement.component.html',
  styleUrls: ['./edit-appointement.component.css'],
})
export class EditAppointementComponent extends URLLoader implements OnInit {
  model: Appointement = new Appointement(0, '', '', '', '', '', '');
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;

  constructor(
    //private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    //private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new Appointement(0, '', '', '', '', '', '');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/category']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    //  this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/category/' + this.id)
        .subscribe((data: Appointement) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.httpService.create(URLS.URL_BASE + '/category/create', this.model);
    this.closeModal();
    this.goBack();
    /*  super.show(
      'Confirmation',
      this.message.confirmationMessages.edit,
      'success'
    ); */
    this.closeModal();
  }
}
