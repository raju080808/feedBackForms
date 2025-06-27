declare var bootstrap: any;
import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FeedbackService } from '../feedback.service';
import { NodataPipe } from '../nodata.pipe';
import { FirstlettercapsPipe } from '../firstlettercaps.pipe';

@Component({
  selector: 'app-userfeedback-data',
  imports: [CommonModule,NodataPipe,UpperCasePipe,FirstlettercapsPipe],
  templateUrl: './userfeedback-data.component.html',
  styleUrl: './userfeedback-data.component.css'
})
export class UserfeedbackDataComponent {
  deleteDataId: any= null ;
  userfeedbackList: any[] = [];
  selectedRow: any= null;
  constructor(private feedbackService: FeedbackService) {
    this.userfeedbackList = this.feedbackService.userfeedbackList;
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
    this.feedbackService.deleteUserFeedback(this.deleteDataId);
    this.userfeedbackList = this.feedbackService.userfeedbackList; 
  }
}

