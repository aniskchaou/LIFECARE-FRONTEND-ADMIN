import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBloodComponent } from './edit-blood.component';

describe('EditBloodComponent', () => {
  let component: EditBloodComponent;
  let fixture: ComponentFixture<EditBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
