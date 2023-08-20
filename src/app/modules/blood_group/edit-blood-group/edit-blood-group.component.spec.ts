import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodGroupComponent } from './edit-blood-group.component';

describe('EditBloodGroupComponent', () => {
  let component: EditBloodGroupComponent;
  let fixture: ComponentFixture<EditBloodGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBloodGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
