import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologyCategoryListComponent } from './radiology-category-list.component';

describe('RadiologyCategoryListComponent', () => {
  let component: RadiologyCategoryListComponent;
  let fixture: ComponentFixture<RadiologyCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologyCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologyCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
