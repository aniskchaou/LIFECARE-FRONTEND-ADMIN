import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedecineTypeComponent } from './add-medecine-type.component';

describe('AddMedecineTypeComponent', () => {
  let component: AddMedecineTypeComponent;
  let fixture: ComponentFixture<AddMedecineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedecineTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedecineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
