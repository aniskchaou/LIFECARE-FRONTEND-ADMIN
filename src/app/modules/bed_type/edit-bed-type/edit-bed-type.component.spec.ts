import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBedTypeComponent } from './edit-bed-type.component';

describe('EditBedTypeComponent', () => {
  let component: EditBedTypeComponent;
  let fixture: ComponentFixture<EditBedTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBedTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
