import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserFeedbackComponent,AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userclicked=false;
  pharmacyclicked=false;
  constructor(private route:Router){this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pharmacyclicked = !(event.url === '/' || event.urlAfterRedirects === '/');
        this.userclicked = !(event.url === '/' || event.urlAfterRedirects === '/');
      }
    });}
  movecomponent1(){
    this.route.navigate(["/userdetails"]);
    this.userclicked=true;
    this.pharmacyclicked=true;
  }
  movecomponent2(){
    this.route.navigate(["/pharmacydetails"]);
    this.pharmacyclicked=true;
    this.userclicked=true;
  }

}