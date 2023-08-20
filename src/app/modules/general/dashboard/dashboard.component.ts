import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import Appointement from 'src/app/main/models/Appointement';
import { Bed } from 'src/app/main/models/Bed';
import Doctor from 'src/app/main/models/Doctor';
import Patient from 'src/app/main/models/Patient';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent extends URLLoader implements OnInit {
  single: any[];
  multi: any[];
  dep: any[];

  view: any[] = [500, 450];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Months';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  patients$: any;
  doctors$: number;
  appointements$: number;
  beds$: number;

  constructor(private httpService: HTTPService) {
    super();
    Object.assign(this, { single });
    Object.assign(this, { dep });
  }

  ngOnInit(): void {
    this.httpService.getAll(URLS.URL_BASE + '/patient/all').subscribe(
      (data: Patient[]) => {
        this.patients$ = data?.length;
        // super.loadScripts();
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );

    this.httpService.getAll(URLS.URL_BASE + '/doctor/all').subscribe(
      (data: Doctor[]) => {
        this.doctors$ = data?.length;
        // super.loadScripts();
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );

    this.httpService.getAll(URLS.URL_BASE + '/appointement/all').subscribe(
      (data: Appointement[]) => {
        this.appointements$ = data?.length;
        // super.loadScripts();
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );

    this.httpService.getAll(URLS.URL_BASE + '/bed/all').subscribe(
      (data: Bed[]) => {
        this.beds$ = data?.length;
        // super.loadScripts();
      },
      (err: HttpErrorResponse) => {
        super.show('Error', err.message, 'warning');
      }
    );
  }

  single2: any[];
  view2: any[] = [500, 400];

  // options
  gradient2: boolean = true;
  showLegend2: boolean = true;
  showLabels2: boolean = true;
  isDoughnut2: boolean = false;
  legendPosition2: string = 'below';

  colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

export var single = [
  {
    name: 'June',
    value: 8940000,
  },
  {
    name: 'July',
    value: 5000000,
  },
  {
    name: 'August',
    value: 7200000,
  },
];

export var dep = [
  {
    name: 'Cardiology',
    value: 8940000,
  },
  {
    name: 'Neurology',
    value: 5000000,
  },
  {
    name: 'Radiology',
    value: 7200000,
  },
];
