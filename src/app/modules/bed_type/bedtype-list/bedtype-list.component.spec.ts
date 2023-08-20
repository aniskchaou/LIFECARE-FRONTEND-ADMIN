import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedtypeListComponent } from './bedtype-list.component';

describe('BedtypeListComponent', () => {
  let component: BedtypeListComponent;
  let fixture: ComponentFixture<BedtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
