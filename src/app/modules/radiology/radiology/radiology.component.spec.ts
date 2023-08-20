import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologyComponent } from './radiology.component';

describe('RadiologyComponent', () => {
  let component: RadiologyComponent;
  let fixture: ComponentFixture<RadiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
