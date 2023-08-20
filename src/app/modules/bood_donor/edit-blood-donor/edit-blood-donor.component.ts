import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Messages from 'src/app/main/configs/messages';
import { BloodDonor } from 'src/app/main/models/BloodDonor';
import { BloodGroup } from 'src/app/main/models/bloodGroup';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-blood-donor',
  templateUrl: './edit-blood-donor.component.html',
  styleUrls: ['./edit-blood-donor.component.css'],
})
export class EditBloodDonorComponent extends URLLoader implements OnInit {
  model: BloodDonor = new BloodDonor(0, '', '', '', '', null, '');
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;
  bloodGroups$: BloodGroup[];

  constructor(
    //private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    // private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new BloodDonor(0, '', '', '', '', null, '');
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  goBack() {
    this.router
      .navigateByUrl('/dashboard', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['/blooddonor']);
      });
  }

  ngOnInit(): void {
    this.getCategory();
    //this.getCategoryByLang(URLS.getInstance().getLang());
    this.getAll();
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    // this.getCategoryByLang(URLS.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/blooddonor/' + this.id)
        .subscribe((data: BloodDonor) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  getAll() {
    this.httpService.getAll(URLS.URL_BASE + '/bloodgroup/all').subscribe(
      (data: BloodGroup[]) => {
        this.bloodGroups$ = data;
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  edit() {
    this.model.bloodGroup = this.bloodGroups$.filter(
      (x) => x.id == this.model.bloodGroup.id
    )[0];
    this.httpService
      .create(URLS.URL_BASE + '/blooddonor/create', this.model)
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

    //this.closeModal();
  }
}
