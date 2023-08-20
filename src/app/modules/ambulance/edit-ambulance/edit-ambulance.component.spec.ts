import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmbulanceComponent } from './edit-ambulance.component';

describe('EditAmbulanceComponent', () => {
  let component: EditAmbulanceComponent;
  let fixture: ComponentFixture<EditAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAmbulanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
