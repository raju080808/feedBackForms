import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
 private storageKey1 = 'userFeedbackList';
 private storageKey2 = 'pharmacyFeedbackList';
  get userfeedbackList(): any[] {
    const stored1 = localStorage.getItem(this.storageKey1);
    return stored1 ? JSON.parse(stored1) : [];
  }
  set userfeedbackList(data: any[]) {
    localStorage.setItem(this.storageKey1, JSON.stringify(data));
  }
  addUserFeedback(feedback: any) {
    const currentList = this.userfeedbackList;//calls getter userfeedbackList
    currentList.push(feedback);
    this.userfeedbackList = currentList;//calls setter userfeedbackList
  }
  deleteUserFeedback(index: number) {
    const currentList = this.userfeedbackList;//calls getter userfeedbackList
    currentList.splice(index, 1);
    this.userfeedbackList = currentList;//calls setter userfeedbackList
  }

  get pharmacyfeedbackList(): any[] {
    const stored2 = localStorage.getItem(this.storageKey2);
    return stored2 ? JSON.parse(stored2) : [];
  }
  set pharmacyfeedbackList(data: any[]) {
    localStorage.setItem(this.storageKey2, JSON.stringify(data));
  }
  addPharmacyFeedback(feedback: any) {
    const currentList = this.pharmacyfeedbackList;//calls getter pharmacyfeedbackList
    currentList.push(feedback);
    this.pharmacyfeedbackList = currentList;//calls setter pharmacyfeedbackList
  }
  deletePharmacyFeedback(index: number) {
    const currentList = this.pharmacyfeedbackList;//calls getter pharmacyfeedbackList
    currentList.splice(index, 1);
    this.pharmacyfeedbackList = currentList;//calls setter pharmacyfeedbackList
  }
}
