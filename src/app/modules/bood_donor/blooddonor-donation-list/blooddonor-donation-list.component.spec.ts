import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonorDonationListComponent } from './blooddonor-donation-list.component';

describe('BlooddonorDonationListComponent', () => {
  let component: BlooddonorDonationListComponent;
  let fixture: ComponentFixture<BlooddonorDonationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonorDonationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonorDonationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
