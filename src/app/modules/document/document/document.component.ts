import { Component, OnInit } from '@angular/core';
import DocumentMessage from 'src/app/main/messages/DocumentMessage';
import DocumentTestService from 'src/app/main/mocks/DocumentTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { Router } from '@angular/router';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import Document from 'src/app/main/models/Document';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent extends URLLoader implements OnInit {
  showsummary: boolean = false;
  showgraphic: boolean = false;
  documents$;
  id = 0;
  loading = false;

  constructor(
    private router: Router,
    private documentTestService: DocumentTestService,
    private messageService: DocumentMessage,
    private httpService: HTTPService
  ) {
    super();
    super.loadScripts();
    this.getAll();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    this.documentTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm('Voulez-vous supprimer cet enregistrement ?');
    if (r) {
      this.setId(id);
      this.documentTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/document/delete/' + id);
      super.show(
        'Confirmation',
        this.messageService.confirmationMessages.delete,
        'success'
      );
      this.getAll();
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }
  ngOnChanges() {
    // this.getAll();
  }
  ngDoCheck() {
    // this.getAll();
  }

  getAll() {
    //this.documents$ = this.documentTestService.getAll()
    this.loading = true;
    this.httpService.getAll(URLS.URL_BASE + '/document/all').subscribe(
      (data: Document[]) => {
        this.documents$ = data;
        this.loading = false;
        console.log(this.documents$);
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
