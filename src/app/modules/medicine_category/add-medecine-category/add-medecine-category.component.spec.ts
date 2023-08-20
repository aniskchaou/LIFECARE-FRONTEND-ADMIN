import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedecineCategoryComponent } from './add-medecine-category.component';

describe('AddMedecineCategoryComponent', () => {
  let component: AddMedecineCategoryComponent;
  let fixture: ComponentFixture<AddMedecineCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedecineCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedecineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
