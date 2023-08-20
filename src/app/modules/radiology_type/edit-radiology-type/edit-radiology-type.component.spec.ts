import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRadiologyTypeComponent } from './edit-radiology-type.component';

describe('EditRadiologyTypeComponent', () => {
  let component: EditRadiologyTypeComponent;
  let fixture: ComponentFixture<EditRadiologyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRadiologyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRadiologyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
