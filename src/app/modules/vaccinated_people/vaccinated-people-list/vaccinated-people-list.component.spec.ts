import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedPeopleListComponent } from './vaccinated-people-list.component';

describe('VaccinatedPeopleListComponent', () => {
  let component: VaccinatedPeopleListComponent;
  let fixture: ComponentFixture<VaccinatedPeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinatedPeopleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
