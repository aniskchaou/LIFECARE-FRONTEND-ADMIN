import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRadiologyTypeComponent } from './add-radiology-type.component';

describe('AddRadiologyTypeComponent', () => {
  let component: AddRadiologyTypeComponent;
  let fixture: ComponentFixture<AddRadiologyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRadiologyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRadiologyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
