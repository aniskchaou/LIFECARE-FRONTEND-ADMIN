import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { RadiologyType } from 'src/app/main/models/RadiologyType';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-radiology-type',
  templateUrl: './edit-radiology-type.component.html',
  styleUrls: ['./edit-radiology-type.component.css'],
})
export class EditRadiologyTypeComponent extends URLLoader implements OnInit {
  model: RadiologyType = new RadiologyType(0, '');
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
    this.model = new RadiologyType(0, '');
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
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    //this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/category/' + this.id)
        .subscribe((data: RadiologyType) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.httpService.create(URLS.URL_BASE + '/category/create', this.model);
    this.closeModal();
    this.goBack();
    super.show(
      'Confirmation',
      '',
      //this.message.confirmationMessages.edit,
      'success'
    );
    this.closeModal();
  }
}
