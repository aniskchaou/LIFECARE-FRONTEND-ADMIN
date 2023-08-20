import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLabComponent } from './test-lab.component';

describe('TestLabComponent', () => {
  let component: TestLabComponent;
  let fixture: ComponentFixture<TestLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
