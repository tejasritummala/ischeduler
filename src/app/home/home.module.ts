import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*Imported all home module components*/
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
/*Initiated All Home page related router functionalities in this module*/
import { HomeRoutesModule } from './home-routes.module';
/*Added components to Home module*/
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutesModule
  ],
})
export class HomeModule { }
