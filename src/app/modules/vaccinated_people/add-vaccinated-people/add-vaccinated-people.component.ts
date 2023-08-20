import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import VaccinationMessage from 'src/app/main/messages/VaccinationMessage';
import { VaccinatedPeople } from 'src/app/main/models/VaccinatedPeople';
import { Vaccination } from 'src/app/main/models/Vaccination';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import VaccinatedPeopleValidation from 'src/app/main/validations/VaccinatedPeopleValidation';

@Component({
  selector: 'app-add-vaccinated-people',
  templateUrl: './add-vaccinated-people.component.html',
  styleUrls: ['./add-vaccinated-people.component.css'],
})
export class AddVaccinatedPeopleComponent extends URLLoader implements OnInit {
  vaccinatedPeopleForm: FormGroup;
  msg: VaccinationMessage;
  submitted = false;
  vaccinations$: Vaccination[];

  get f() {
    return this.vaccinatedPeopleForm.controls;
  }

  constructor(
    private router: Router,
    private validation: VaccinatedPeopleValidation,
    private message: VaccinationMessage,
    // private doctorTestService: DoctorTestService,
    private httpService: HTTPService
  ) {
    super();
    this.vaccinatedPeopleForm = this.validation.formGroupInstance;
    this.msg = this.message;
    this.getVaccinations();
  }

  ngOnInit(): void {}

  reset() {
    this.vaccinatedPeopleForm.reset();
  }

  add() {
    this.submitted = true;
    this.vaccinatedPeopleForm.value.vaccine = this.vaccinations$.filter(
      (x) => x.id == parseInt(this.vaccinatedPeopleForm.value.vaccine)
    )[0];
    console.log(this.vaccinatedPeopleForm.value);
    /* this.buyForm.value.product_id = this.products$.filter(
      (x) => x.id == parseInt(this.buyForm.value.product_id)
    )[0];
  */
    // if (this.validation.checkValidation()) {
    this.httpService
      .create(
        URLS.URL_BASE + '/vaccinatedpeople/create',
        this.vaccinatedPeopleForm.value
      )
      .then(() => {
        super.show(
          'Confirmation',
          this.msg.confirmationMessages.add,
          'success'
        );
        this.reloadPage();
      });

    //  }
  }

  getVaccinations() {
    this.httpService.getAll(URLS.URL_BASE + '/vaccination/all').subscribe(
      (data: Vaccination[]) => {
        this.vaccinations$ = data;
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
        this.router.navigate(['/vaccinatedpeople']);
      });
  }
}
