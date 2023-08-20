import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationListComponent } from './blood-donation-list.component';

describe('BloodDonationListComponent', () => {
  let component: BloodDonationListComponent;
  let fixture: ComponentFixture<BloodDonationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodDonationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
