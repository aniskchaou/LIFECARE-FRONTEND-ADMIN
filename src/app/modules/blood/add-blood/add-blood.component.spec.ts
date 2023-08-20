import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodComponent } from './add-blood.component';

describe('AddBloodComponent', () => {
  let component: AddBloodComponent;
  let fixture: ComponentFixture<AddBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
