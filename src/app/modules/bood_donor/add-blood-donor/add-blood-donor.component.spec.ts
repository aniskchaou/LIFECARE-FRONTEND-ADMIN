import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDonorComponent } from './add-blood-donor.component';

describe('AddBloodDonorComponent', () => {
  let component: AddBloodDonorComponent;
  let fixture: ComponentFixture<AddBloodDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
