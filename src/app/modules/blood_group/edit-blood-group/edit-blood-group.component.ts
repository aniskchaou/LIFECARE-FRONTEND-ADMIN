import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { BloodGroup } from 'src/app/main/models/bloodGroup';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-blood-group',
  templateUrl: './edit-blood-group.component.html',
  styleUrls: ['./edit-blood-group.component.css'],
})
export class EditBloodGroupComponent extends URLLoader implements OnInit {
  model: BloodGroup = new BloodGroup(0, '');
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;

  constructor(
    // private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    //  private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new BloodGroup(0, '');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/bloodgroup']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
    //  this.getCategoryByLang(URLS.getInstance().getLang());
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    this.httpService
      .get(URLS.URL_BASE + '/bloodgroup/' + this.id)
      .subscribe((data: BloodGroup) => {
        this.model = data;
        console.log(this.model);
      });
  }

  edit() {
    this.httpService
      .create(URLS.URL_BASE + '/bloodgroup/create', this.model)
      .then(() => {
        this.closeModal();
        this.goBack();
        super.show(
          'Confirmation',
          Messages.EDIT_CONFIRMATION_MSG,
          //this.message.confirmationMessages.edit,
          'success'
        );
      });

    //this.closeModal();
  }
}
