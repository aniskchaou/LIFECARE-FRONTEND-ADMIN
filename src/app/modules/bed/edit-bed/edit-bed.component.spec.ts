import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBedComponent } from './edit-bed.component';

describe('EditBedComponent', () => {
  let component: EditBedComponent;
  let fixture: ComponentFixture<EditBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
