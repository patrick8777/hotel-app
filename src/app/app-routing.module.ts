import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: 'create',
    component: CreateBookingComponent,
  },
  {
    path: 'edit/:id',
    component: CreateBookingComponent,
  },
  {
    path: '',
    redirectTo: 'bookings',
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-detail',
    component: EmployeeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
