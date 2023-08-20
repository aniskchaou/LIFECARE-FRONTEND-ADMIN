import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodListComponent } from './blood-list.component';

describe('BloodListComponent', () => {
  let component: BloodListComponent;
  let fixture: ComponentFixture<BloodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
