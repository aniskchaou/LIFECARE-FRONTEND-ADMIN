import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVaccinationComponent } from './edit-vaccination.component';

describe('EditVaccinationComponent', () => {
  let component: EditVaccinationComponent;
  let fixture: ComponentFixture<EditVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
