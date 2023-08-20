import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologyListComponent } from './radiology-list.component';

describe('RadiologyListComponent', () => {
  let component: RadiologyListComponent;
  let fixture: ComponentFixture<RadiologyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
