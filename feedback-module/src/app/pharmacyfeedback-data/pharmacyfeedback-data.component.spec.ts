import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyfeedbackDataComponent } from './pharmacyfeedback-data.component';

describe('PharmacyfeedbackDataComponent', () => {
  let component: PharmacyfeedbackDataComponent;
  let fixture: ComponentFixture<PharmacyfeedbackDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PharmacyfeedbackDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyfeedbackDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
