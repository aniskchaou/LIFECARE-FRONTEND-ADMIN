import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodDonorComponent } from './edit-blood-donor.component';

describe('EditBloodDonorComponent', () => {
  let component: EditBloodDonorComponent;
  let fixture: ComponentFixture<EditBloodDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBloodDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
