import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyFeedbackComponent } from './pharmacy-feedback.component';

describe('PharmacyFeedbackComponent', () => {
  let component: PharmacyFeedbackComponent;
  let fixture: ComponentFixture<PharmacyFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
