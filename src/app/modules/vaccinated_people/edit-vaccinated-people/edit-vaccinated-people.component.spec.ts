import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVaccinatedPeopleComponent } from './edit-vaccinated-people.component';

describe('EditVaccinatedPeopleComponent', () => {
  let component: EditVaccinatedPeopleComponent;
  let fixture: ComponentFixture<EditVaccinatedPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVaccinatedPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVaccinatedPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
