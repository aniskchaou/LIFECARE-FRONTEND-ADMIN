import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { Bed } from 'src/app/main/models/Bed';
import { BedType } from 'src/app/main/models/BedType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-bed',
  templateUrl: './edit-bed.component.html',
  styleUrls: ['./edit-bed.component.css'],
})
export class EditBedComponent extends URLLoader implements OnInit {
  model: Bed = new Bed(0, '', undefined, '');
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  bedTypes$: BedType[];

  constructor(
    // private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    // private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new Bed(0, '', undefined, '');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/bed']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
    this.getAll();
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/bed/' + this.id)
        .subscribe((data: Bed) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/bedtype/all').subscribe(
      (data: BedType[]) => {
        this.bedTypes$ = data;
        console.log(this.bedTypes$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  edit() {
    this.model.bedType = this.bedTypes$.filter(
      (x) => x.id == this.model.bedType.id
    )[0];
    this.httpService.create(URLS.URL_BASE + '/bed/create', this.model);
    this.closeModal();
    this.goBack();
    super.show(
      'Confirmation',
      Messages.EDIT_CONFIRMATION_MSG,
      // this.message.confirmationMessages.edit,
      'success'
    );
    this.closeModal();
  }
}
