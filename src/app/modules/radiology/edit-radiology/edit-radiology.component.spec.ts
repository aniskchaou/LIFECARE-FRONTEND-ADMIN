import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRadiologyComponent } from './edit-radiology.component';

describe('EditRadiologyComponent', () => {
  let component: EditRadiologyComponent;
  let fixture: ComponentFixture<EditRadiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRadiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
