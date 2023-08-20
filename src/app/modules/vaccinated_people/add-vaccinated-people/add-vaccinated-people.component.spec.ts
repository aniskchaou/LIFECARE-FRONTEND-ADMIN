import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVaccinatedPeopleComponent } from './add-vaccinated-people.component';

describe('AddVaccinatedPeopleComponent', () => {
  let component: AddVaccinatedPeopleComponent;
  let fixture: ComponentFixture<AddVaccinatedPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVaccinatedPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVaccinatedPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
