import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodGroupComponent } from './add-blood-group.component';

describe('AddBloodGroupComponent', () => {
  let component: AddBloodGroupComponent;
  let fixture: ComponentFixture<AddBloodGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
