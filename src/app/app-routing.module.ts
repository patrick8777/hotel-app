import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component'; 
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { TableComponent } from './table/table.component';

const routes: Routes =[
  {
    path:'bookings', component:BookingsComponent
  },
  {
    path:'create', component:CreateBookingComponent
  },
  {
   path:'edit/:id', component:CreateBookingComponent
  },
  {
    path:'',redirectTo:'bookings',pathMatch:'full'
  },
  {
    path:'table', component:TableComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
