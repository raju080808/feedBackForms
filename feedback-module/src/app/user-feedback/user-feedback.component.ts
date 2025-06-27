declare var bootstrap: any;
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';


@Component({
  selector: 'app-user-feedback',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,NgClass],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.css'
})
export class UserFeedbackComponent {
  
  userFeedback: FormGroup;
  isSubmitted = false;
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  setRating(value: number) {
    this.rating = value;
  }
  constructor(private fb: FormBuilder,private route:Router,private feedbackService:FeedbackService) {
    this.userFeedback = this.fb.group({
      fullname:['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}")]],
      email:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]{2,}$")]],
      orderid:['',Validators.required],
      issuetype:['',Validators.required],
      feedbackmessage:[],
      rating:[]
    })  
}
 userSubmit() {
   if (this.userFeedback.valid){
    console.log(this.userFeedback.value.fullname+'\n'+this.userFeedback.value.orderid+
      '\n'+this.rating
    );
      const modalEl = document.getElementById('formSubittedModel');
      if (modalEl) {
      const modal1 = new bootstrap.Modal(modalEl);
      modal1.show();
    }       
    const newFeedback = {
        ...this.userFeedback.value,
        rating: this.rating
      };
      this.userFeedback.reset();
      this.rating = 0;
      //this.feedbackService.feedbackList = [newFeedback];
      this.feedbackService.addUserFeedback(newFeedback);
      this.route.navigate(['/userfeedbackdata']); 
      this.isSubmitted = true;
  }
  else{this.userFeedback.markAllAsTouched();}
 }
}

