import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointementComponent } from './doctor-appointement.component';

describe('DoctorAppointementComponent', () => {
  let component: DoctorAppointementComponent;
  let fixture: ComponentFixture<DoctorAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
