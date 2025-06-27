import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedbackDataComponent } from './userfeedback-data.component';

describe('UserfeedbackDataComponent', () => {
  let component: UserfeedbackDataComponent;
  let fixture: ComponentFixture<UserfeedbackDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserfeedbackDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfeedbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
