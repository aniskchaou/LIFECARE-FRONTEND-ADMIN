import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDonationComponent } from './add-blood-donation.component';

describe('AddBloodDonationComponent', () => {
  let component: AddBloodDonationComponent;
  let fixture: ComponentFixture<AddBloodDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
