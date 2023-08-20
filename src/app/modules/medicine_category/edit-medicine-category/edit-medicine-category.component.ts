import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { MedecineCategory } from 'src/app/main/models/MedecineCategory';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-medecine-category',
  templateUrl: './edit-medicine-category.component.html',
  styleUrls: ['./edit-medicine-category.component.css'],
})
export class EditMedicineCategoryComponent extends URLLoader implements OnInit {
  model: MedecineCategory = new MedecineCategory(0, '');
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
    this.model = new MedecineCategory(0, '');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/medicinecategory']);
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
        .get(URLS.URL_BASE + '/medecinecategory/' + this.id)
        .subscribe((data: MedecineCategory) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.httpService
      .create(URLS.URL_BASE + '/medecinecategory/create', this.model)
      .then(() => {
        this.closeModal();
        this.goBack();
        super.show(
          'Confirmation',
          Messages.EDIT_CONFIRMATION_MSG,
          // this.message.confirmationMessages.edit,
          'success'
        );
      });

    // this.closeModal();
  }
}
