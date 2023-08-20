import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { MedecineCategory } from 'src/app/main/models/MedecineCategory';
import { MedecineType } from 'src/app/main/models/MedecineType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import MedicamentValidation from 'src/app/main/validations/MedicamentValidation';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css'],
})
export class AddMedicamentComponent extends URLLoader implements OnInit {
  medicamentForm: FormGroup;
  //msg: CategoryMessage;
  submitted = false;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  medecineCategories$: MedecineCategory[];
  medecineTypes$: MedecineType[];

  constructor(
    private validation: MedicamentValidation,
    //  private message: CategoryMessage,
    private httpService: HTTPService,
    private router: Router
  ) {
    super();
    this.medicamentForm = this.validation.formGroupInstance;
    //this.msg = this.message;
    this.getMedecinecategories();
    this.getMedecinetypes();
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
  get f() {
    return this.medicamentForm.controls;
  }

  ngOnInit(): void {
    // this.getCategoryByLang(URLS.getInstance().getLang());
    this.getMedecinecategories();
    this.getMedecinetypes();
  }

  reset() {
    this.medicamentForm.reset();
  }

  add() {
    this.medicamentForm.value.category = this.medecineCategories$.filter(
      (x) => x.id == parseInt(this.medicamentForm.value.category)
    )[0];
    this.medicamentForm.value.type = this.medecineTypes$.filter(
      (x) => x.id == parseInt(this.medicamentForm.value.type)
    )[0];

    this.submitted = true;
    //    if (this.validation.checkValidation()) {
    this.httpService.create(
      URLS.URL_BASE + '/medecine/create',
      this.medicamentForm.value
    );
    // this.medicamentForm.reset();
    // this.closeModal();
    // this.goBack();
    console.log(this.medicamentForm.value);
    super.show(
      'Confirmation',
      Messages.ADD_CONFIRMATION_MSG,
      // this.msg.addConfirmation[URLS.getInstance().getLang()],
      'success'
    );
    this.reloadPage();
    //  }
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

  reloadPage() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/medicine']);
      });
  }
}
