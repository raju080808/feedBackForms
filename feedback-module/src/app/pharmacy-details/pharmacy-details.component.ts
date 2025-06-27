declare var bootstrap: any;
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-details',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './pharmacy-details.component.html',
  styleUrl: './pharmacy-details.component.css'
})
export class PharmacyDetailsComponent {
pharmacyFeedback: FormGroup;
  backcomponent(){
  this.route.navigate(["/"]);
 }
  constructor(private fb: FormBuilder,private route:Router) {
    this.pharmacyFeedback = this.fb.group({
      pharmacyname:['',Validators.required],
      contactpersonname:['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}")]],
      email:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-zA-Z]{2,}$")]]
    })  
}
 pharmacySubmit() {
   if (this.pharmacyFeedback.valid){
    console.log(this.pharmacyFeedback.value.fullname+'\n'+this.pharmacyFeedback.value.email);
      const modalEl = document.getElementById('formSubittedModel');
      if (modalEl) {
      const modal1 = new bootstrap.Modal(modalEl);
      modal1.show();
    }
    this.route.navigate(['/pharmacyfeedback'])
  }
  else{
    this.pharmacyFeedback.markAllAsTouched();
  }
}
}
