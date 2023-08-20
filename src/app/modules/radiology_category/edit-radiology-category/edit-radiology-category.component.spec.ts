import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRadiologyCategoryComponent } from './edit-radiology-category.component';

describe('EditRadiologyCategoryComponent', () => {
  let component: EditRadiologyCategoryComponent;
  let fixture: ComponentFixture<EditRadiologyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRadiologyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRadiologyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
