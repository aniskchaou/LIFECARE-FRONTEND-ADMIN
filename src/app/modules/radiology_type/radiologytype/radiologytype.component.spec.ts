import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologytypeComponent } from './radiologytype.component';

describe('RadiologytypeComponent', () => {
  let component: RadiologytypeComponent;
  let fixture: ComponentFixture<RadiologytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
