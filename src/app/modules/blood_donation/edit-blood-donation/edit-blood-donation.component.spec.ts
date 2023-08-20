import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodDonationComponent } from './edit-blood-donation.component';

describe('EditBloodDonationComponent', () => {
  let component: EditBloodDonationComponent;
  let fixture: ComponentFixture<EditBloodDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBloodDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
