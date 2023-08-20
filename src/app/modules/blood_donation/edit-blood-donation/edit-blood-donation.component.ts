import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-blood-donation',
  templateUrl: './edit-blood-donation.component.html',
  styleUrls: ['./edit-blood-donation.component.css'],
})
export class EditBloodDonationComponent implements OnInit {
  model: Category = new Category(0, '');
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();
  categoryI18n;

  constructor(
    private categoryTestService: CategoryTestService,
    private httpService: HTTPService,
    private message: CategoryMessage,
    private router: Router
  ) {
    super();
    this.model = new Category(0, '');
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
    this.getCategoryByLang(CONFIG.getInstance().getLang());
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    this.getCategoryByLang(CONFIG.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(CONFIG.URL_BASE + '/category/' + this.id)
        .subscribe((data: Category) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.httpService.create(CONFIG.URL_BASE + '/category/create', this.model);
    this.closeModal();
    this.goBack();
    super.show(
      'Confirmation',
      this.message.confirmationMessages.edit,
      'success'
    );
    this.closeModal();
  }
}
