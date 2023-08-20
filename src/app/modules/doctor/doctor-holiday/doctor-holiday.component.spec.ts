import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHolidayComponent } from './doctor-holiday.component';

describe('DoctorHolidayComponent', () => {
  let component: DoctorHolidayComponent;
  let fixture: ComponentFixture<DoctorHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
