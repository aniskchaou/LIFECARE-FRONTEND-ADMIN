import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmbulanceComponent } from './add-ambulance.component';

describe('AddAmbulanceComponent', () => {
  let component: AddAmbulanceComponent;
  let fixture: ComponentFixture<AddAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAmbulanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
