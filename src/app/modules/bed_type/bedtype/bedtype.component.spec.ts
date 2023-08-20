import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedtypeComponent } from './bedtype.component';

describe('BedtypeComponent', () => {
  let component: BedtypeComponent;
  let fixture: ComponentFixture<BedtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
