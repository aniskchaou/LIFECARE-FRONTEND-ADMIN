import { Component, OnInit } from '@angular/core';
import { sampleOne, sampleTwo } from '../simple-data';

@Component({
  selector: 'app-doctor-appointement',
  templateUrl: './doctor-appointement.component.html',
  styleUrls: ['./doctor-appointement.component.css'],
})
export class DoctorAppointementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  options1 = {
    outline: false,
  };

  options2 = {
    outline: false,
    evenDayDimensions: true,
  };

  events = sampleOne;

  addDate() {
    this.events = sampleTwo;
  }
}
