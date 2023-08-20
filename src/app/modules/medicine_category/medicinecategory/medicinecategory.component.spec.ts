import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinecategoryComponent } from './medicinecategory.component';

describe('MedicinecategoryComponent', () => {
  let component: MedicinecategoryComponent;
  let fixture: ComponentFixture<MedicinecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
