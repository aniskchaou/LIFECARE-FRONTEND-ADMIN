import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologyTypeListComponent } from './radiology-type-list.component';

describe('RadiologyTypeListComponent', () => {
  let component: RadiologyTypeListComponent;
  let fixture: ComponentFixture<RadiologyTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologyTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologyTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
