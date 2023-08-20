import { Component, OnInit } from '@angular/core';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HttpErrorResponse } from '@angular/common/http';
import URLS from 'src/app/main/urls/urls';
import Category from 'src/app/main/models/Category';
import { HTTPService } from 'src/app/main/services/HTTPService';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent extends URLLoader implements OnInit {
  categorys$;
  id = 0;

  constructor(
    private categoryTestService: CategoryTestService,
    private messageService: CategoryMessage,
    private httpService: HTTPService
  ) {
    super();
  }

  setId(id) {
    this.id = id;
  }

  edit(id) {
    this.setId(id);
    this.categoryTestService.ID.next(id.toString());
  }

  delete(id) {
    var r = confirm('Voulez-vous supprimer cet enregistrement ?');
    if (r) {
      this.setId(id);
      this.categoryTestService.remove(parseInt(id));
      this.httpService.remove(URLS.URL_BASE + '/category/delete/' + id);
      super.show(
        'Confirmation',
        this.messageService.confirmationMessages.delete,
        'success'
      );
      window.location.reload();
    }
  }

  ngOnInit() {
    super.loadScripts();
    this.getAll();
  }

  getAll() {
    //this.categorys$ = this.categoryTestService.getAll()
    this.httpService.getAll(URLS.URL_BASE + '/category/all').subscribe(
      (data: Category[]) => {
        this.categorys$ = data;
        //console.log(this.buys$)
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }
}
