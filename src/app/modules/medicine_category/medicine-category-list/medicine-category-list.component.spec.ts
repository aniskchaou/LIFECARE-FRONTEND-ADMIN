import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCategoryListComponent } from './medicine-category-list.component';

describe('MedicineCategoryListComponent', () => {
  let component: MedicineCategoryListComponent;
  let fixture: ComponentFixture<MedicineCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
