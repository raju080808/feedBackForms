import { Routes } from '@angular/router';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { PharmacyFeedbackComponent } from './pharmacy-feedback/pharmacy-feedback.component';
import { UserfeedbackDataComponent } from './userfeedback-data/userfeedback-data.component';
import { PharmacyfeedbackDataComponent } from './pharmacyfeedback-data/pharmacyfeedback-data.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';

export const routes: Routes = [
    {path:"userdetails",component:UserDetailsComponent},
    {path:"pharmacydetails",component:PharmacyDetailsComponent},
    {path:"userfeedback",component:UserFeedbackComponent},
    {path:"pharmacyfeedback",component:PharmacyFeedbackComponent},
    {path:"userfeedbackdata",component:UserfeedbackDataComponent},
    {path:"pharmacyfeedbackdata",component:PharmacyfeedbackDataComponent}
 ];
