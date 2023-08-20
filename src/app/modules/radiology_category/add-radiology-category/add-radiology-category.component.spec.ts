import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRadiologyCategoryComponent } from './add-radiology-category.component';

describe('AddRadiologyCategoryComponent', () => {
  let component: AddRadiologyCategoryComponent;
  let fixture: ComponentFixture<AddRadiologyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRadiologyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRadiologyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
