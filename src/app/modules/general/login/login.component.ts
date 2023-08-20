import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HTTPService } from 'src/app/main/services/HTTPService';
import { AuthentificationService } from 'src/app/main/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends URLLoader implements OnInit {
  username = 'admin';
  password = 'admin';
  invalidLogin = false;
  errorMessage = '';
  @Output() reloadMenu = new EventEmitter();
  /*   settings$: Settings;
  menuI18n: Settings; */
  buttonLoginClicked = false;

  constructor(
    private router: Router,
    private loginservice: AuthentificationService,
    private httpService: HTTPService
  ) {
    super();
  }

  ngOnInit() {
    super.loadScripts();
  }

  /*   getDashboardByLang(lang, username, password) {
    this.httpService
      .getAllLang(
        CONFIG.URL_BASE + '/i18n/dashboard/' + lang,
        username,
        password
      )
      .subscribe(
        (data) => {
          this.httpService.dashboardI18n.next(data);
        },
        (err: HttpErrorResponse) => {
          super.show('Error', err.message, 'warning');
          //this.reload = true;
        }
      );
  } */

  /*   getMenuByLang(lang, username, password) {
    this.httpService
      .getAllLang(CONFIG.URL_BASE + '/i18n/menu/' + lang, username, password)
      .subscribe(
        (data) => {
          console.log(data);
          this.httpService.menuI18n.next(data);
        },
        (err: HttpErrorResponse) => {
          super.show('Error', err.message, 'warning');
          //this.reload = true;
        }
      );
  } */

  doLogin(loginform: NgForm) {
    this.buttonLoginClicked = true;
    if (
      loginform.value.username === 'admin' &&
      loginform.value.password === 'admin'
    ) {
      let username = sessionStorage.setItem(
        'username',
        loginform.value.username
      );
      let password = sessionStorage.setItem(
        'password',
        loginform.value.password
      );
      super.show('StockBay', 'Welcome !', 'success');
      super.loadScripts();
      this.buttonLoginClicked = false;
      this.invalidLogin = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.invalidLogin = true;
      // this.errorMessage = error.message;
      super.show(
        'Error Authentification',
        'Error password or username',
        'warning'
      );
    }

    /*  this.loginservice
      .authenticate(loginform.value.username, loginform.value.password)
      .subscribe(
        (data) => {
          if (data) {
            let username = sessionStorage.setItem(
              'username',
              loginform.value.username
            );
            let password = sessionStorage.setItem(
              'password',
              loginform.value.password
            );
            super.show('StockBay', 'Welcome !', 'success');
            super.loadScripts();
            this.buttonLoginClicked = false;
            this.invalidLogin = false;
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          this.invalidLogin = true;
          this.errorMessage = error.message;
          super.show(
            'Error Authentification',
            'Error password or username',
            'warning'
          );
        }
      ); */
  }
}
