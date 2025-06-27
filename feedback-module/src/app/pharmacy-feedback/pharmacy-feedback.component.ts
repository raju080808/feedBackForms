declare var bootstrap: any;
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-pharmacy-feedback',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './pharmacy-feedback.component.html',
  styleUrl: './pharmacy-feedback.component.css'
})
export class PharmacyFeedbackComponent {
  pharmacyFeedback: FormGroup;
   stars = [1, 2, 3, 4, 5];
  rating = 0;

  setRating(value: number) {
    this.rating = value;
  }
  constructor(private fb: FormBuilder,private route:Router,private feedbackService:FeedbackService) {
    this.pharmacyFeedback = this.fb.group({
      pharmacyname:['',Validators.required],
      contactpersonname:['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}")]],
      email:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]{2,}$")]],
      feedbackcategory:['',Validators.required],
      feedbackmessage:[],
      rating:[]
    })   
}
 pharmacySubmit() {
   if (this.pharmacyFeedback.valid){
    console.log(this.pharmacyFeedback.value.pharmacyname+'\n'+this.pharmacyFeedback.value.mobilenumber+
      '\n'+this.rating
    );
      const modalEl = document.getElementById('formSubmittedModel');
      if (modalEl) {
      const modal1 = new bootstrap.Modal(modalEl);
      modal1.show();
    }  
    const newFeedback = {
        ...this.pharmacyFeedback.value,
        rating: this.rating
      };
      this.pharmacyFeedback.reset();
      this.rating = 0;  
      //this.feedbackService.feedbackList = [newFeedback];
      this.feedbackService.addPharmacyFeedback(newFeedback);
      this.route.navigate(['/pharmacyfeedbackdata']); 
  }
  else{this.pharmacyFeedback.markAllAsTouched();}
 }
}

