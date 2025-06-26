declare var bootstrap: any;
import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FirstlettercapsPipe } from '../firstlettercaps.pipe';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { NodataPipe } from '../nodata.pipe';

@Component({
  selector: 'app-pharmacyfeedback-data',
  imports: [CommonModule,FirstlettercapsPipe,UpperCasePipe,NodataPipe],
  templateUrl: './pharmacyfeedback-data.component.html',
  styleUrl: './pharmacyfeedback-data.component.css'
})
export class PharmacyfeedbackDataComponent {
  pharmacyfeedbackList:any[] = [];
  deleteDataId:any=null;
  selectedRow:any=null;
    constructor(private feedbackService: FeedbackService) {
      this.pharmacyfeedbackList = this.feedbackService.pharmacyfeedbackList;
    }
    openViewPopup(feedback:any){
      this.selectedRow=feedback;
      const modalEl = document.getElementById('viewConfirmModel');
    if (modalEl) {
      const modal1 = new bootstrap.Modal(modalEl);
      modal1.show();
      }
    }
    openDeletePopup(index:number){
    this.deleteDataId=index;
    const modalEl = document.getElementById('deleteConfirmModal');
    if (modalEl) {
      const modal1 = new bootstrap.Modal(modalEl);
      modal1.show();
    }
  }
    deleteData() {
      this.feedbackService.deletePharmacyFeedback(this.deleteDataId);
      this.pharmacyfeedbackList = this.feedbackService.pharmacyfeedbackList; 
    }
}
