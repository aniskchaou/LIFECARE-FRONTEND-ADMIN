import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonorComponent } from './blooddonor.component';

describe('BlooddonorComponent', () => {
  let component: BlooddonorComponent;
  let fixture: ComponentFixture<BlooddonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
