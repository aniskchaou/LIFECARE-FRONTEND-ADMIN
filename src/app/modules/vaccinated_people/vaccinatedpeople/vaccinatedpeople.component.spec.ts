import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedpeopleComponent } from './vaccinatedpeople.component';

describe('VaccinatedpeopleComponent', () => {
  let component: VaccinatedpeopleComponent;
  let fixture: ComponentFixture<VaccinatedpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinatedpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
