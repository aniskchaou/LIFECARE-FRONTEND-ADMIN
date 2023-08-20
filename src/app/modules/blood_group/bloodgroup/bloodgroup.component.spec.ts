import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodgroupComponent } from './bloodgroup.component';

describe('BloodgroupComponent', () => {
  let component: BloodgroupComponent;
  let fixture: ComponentFixture<BloodgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
