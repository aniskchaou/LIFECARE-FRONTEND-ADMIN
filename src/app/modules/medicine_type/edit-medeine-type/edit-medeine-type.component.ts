import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { MedecineType } from 'src/app/main/models/MedecineType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-medeine-type',
  templateUrl: './edit-medeine-type.component.html',
  styleUrls: ['./edit-medeine-type.component.css'],
})
export class EditMedeineTypeComponent extends URLLoader implements OnInit {
  model: MedecineType = new MedecineType(0, '');
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;

  constructor(
    // private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    //private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new MedecineType(0, '');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/medicinetype']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    //   this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/medecinetype/' + this.id)
        .subscribe((data: MedecineType) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.httpService.create(URLS.URL_BASE + '/medecinetype/create', this.model);
    this.closeModal();
    this.goBack();
    super.show(
      'Confirmation',
      Messages.EDIT_CONFIRMATION_MSG,
      // this.message.confirmationMessages.edit,
      'success'
    );
    // this.closeModal();
  }
}
