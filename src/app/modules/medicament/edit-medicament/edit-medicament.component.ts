import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { MedecineCategory } from 'src/app/main/models/MedecineCategory';
import { MedecineType } from 'src/app/main/models/MedecineType';
import Medicament from 'src/app/main/models/Medicament';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-medicament',
  templateUrl: './edit-medicament.component.html',
  styleUrls: ['./edit-medicament.component.css'],
})
export class EditMedicamentComponent extends URLLoader implements OnInit {
  model: Medicament = new Medicament(
    0,
    '',
    undefined,
    undefined,
    '',
    '',
    '',
    '',
    ''
  );
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  medecineCategories$: MedecineCategory[];
  medecineTypes$: MedecineType[];

  constructor(
    //private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    // private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new Medicament(
      0,
      '',
      undefined,
      undefined,
      '',
      '',
      '',
      '',
      ''
    );
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/medicine']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
    this.getMedecinecategories();
    this.getMedecinetypes();
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/medecine/' + this.id)
        .subscribe((data: Medicament) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.model.category = this.medecineCategories$.filter(
      (x) => x.id == this.model.category.id
    )[0];
    this.model.type = this.medecineTypes$.filter(
      (x) => x.id == this.model.type.id
    )[0];
    this.httpService.create(URLS.URL_BASE + '/medecine/create', this.model);
    this.closeModal();
    this.goBack();
    super.show(
      'Confirmation',
      Messages.EDIT_CONFIRMATION_MSG,
      //this.message.confirmationMessages.edit,
      'success'
    );
    this.closeModal();
  }

  getMedecinecategories() {
    this.httpService.getAll(URLS.URL_BASE + '/medecinecategory/all').subscribe(
      (data: MedecineCategory[]) => {
        this.medecineCategories$ = data;
        console.log(this.medecineCategories$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  getMedecinetypes() {
    this.httpService.getAll(URLS.URL_BASE + '/medecinetype/all').subscribe(
      (data: MedecineType[]) => {
        this.medecineTypes$ = data;
        console.log(this.medecineTypes$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
