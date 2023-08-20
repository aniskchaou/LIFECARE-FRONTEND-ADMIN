import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedeineTypeComponent } from './edit-medeine-type.component';

describe('EditMedeineTypeComponent', () => {
  let component: EditMedeineTypeComponent;
  let fixture: ComponentFixture<EditMedeineTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedeineTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedeineTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
