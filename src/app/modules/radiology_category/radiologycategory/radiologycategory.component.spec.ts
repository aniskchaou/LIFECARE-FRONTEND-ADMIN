import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologycategoryComponent } from './radiologycategory.component';

describe('RadiologycategoryComponent', () => {
  let component: RadiologycategoryComponent;
  let fixture: ComponentFixture<RadiologycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
