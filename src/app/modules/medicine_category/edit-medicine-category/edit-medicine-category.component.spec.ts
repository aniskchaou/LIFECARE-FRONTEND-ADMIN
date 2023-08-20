import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicineCategoryComponent } from './edit-medicine-category.component';

describe('EditMedicineCategoryComponent', () => {
  let component: EditMedicineCategoryComponent;
  let fixture: ComponentFixture<EditMedicineCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicineCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
