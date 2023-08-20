import { Component, OnInit } from '@angular/core';
import { sampleOne, sampleTwo } from '../simple-data';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css'],
})
export class DoctorScheduleComponent implements OnInit {
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
