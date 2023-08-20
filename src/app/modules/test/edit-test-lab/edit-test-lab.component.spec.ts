import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestLabComponent } from './edit-test-lab.component';

describe('EditTestLabComponent', () => {
  let component: EditTestLabComponent;
  let fixture: ComponentFixture<EditTestLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
