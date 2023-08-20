import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DocumentMessage from 'src/app/main/messages/DocumentMessage';
import DocumentTestService from 'src/app/main/mocks/DocumentTestService';
import Document from 'src/app/main/models/Document';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css'],
})
export class EditDocumentComponent extends URLLoader implements OnInit {
  model: Document;
  @Input() id = undefined;
  @Output() closeModalEvent = new EventEmitter<string>();

  constructor(
    private documentTestService: DocumentTestService,
    private message: DocumentMessage,
    private httpService: HTTPService
  ) {
    super();
    this.model = this.create();
  }

  create() {
    return new Document(0, '', '');
  }

  ngOnInit(): void {
    this.getCategory();
  }

  ngOnChanges(changes: any) {
    this.getCategory();
    // this.getCategoryByLang(CONFIG.getInstance().getLang());
  }

  getCategory() {
    if (this.id != undefined) {
      this.httpService
        .get(URLS.URL_BASE + '/document/' + this.id)
        .subscribe((data: Document) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }

  edit() {
    this.documentTestService.update(this.model);
    super.show(
      'Confirmation',
      this.message.confirmationMessages.edit,
      'success'
    );
  }
}
