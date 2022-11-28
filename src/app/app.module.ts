import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
