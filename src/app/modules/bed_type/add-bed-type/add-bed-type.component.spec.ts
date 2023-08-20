import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBedTypeComponent } from './add-bed-type.component';

describe('AddBedTypeComponent', () => {
  let component: AddBedTypeComponent;
  let fixture: ComponentFixture<AddBedTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBedTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBedTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
