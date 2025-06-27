declare var bootstrap: any;
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
userFeedback: FormGroup;
  backcomponent(){
  this.route.navigate(["/"]);
 }
  constructor(private fb: FormBuilder,private route:Router) {
    this.userFeedback = this.fb.group({
      fullname:['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}")]],
      email:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]{2,}$")]]
    })  
}
 userSubmit() {
   if (this.userFeedback.valid){
    console.log(this.userFeedback.value.fullname+'\n'+this.userFeedback.value.email);
      const modalEl = document.getElementById('formSubittedModel');
      if (modalEl) {
      const modal1 = new bootstrap.Modal(modalEl);
      modal1.show();
    }
    this.route.navigate(['/userfeedback'])
  }
  else{
    this.userFeedback.markAllAsTouched();
  }
 }
}
