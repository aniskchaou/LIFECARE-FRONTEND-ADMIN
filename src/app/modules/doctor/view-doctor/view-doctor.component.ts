import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Doctor from 'src/app/main/models/Doctor';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css'],
})
export class ViewDoctorComponent implements OnInit {
  model: Doctor;
  @Input() id = undefined;

  constructor(private httpService: HTTPService, private router: Router) {
    this.model = this.create();
  }

  create() {
    return new Doctor(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }
  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    console.log(this.id);
    if (this.id > 0) {
      this.httpService
        .get(URLS.URL_BASE + '/doctor/' + this.id)
        .subscribe((data: Doctor) => {
          this.model = data;
          console.log(this.model);
        });
    }
  }
}
