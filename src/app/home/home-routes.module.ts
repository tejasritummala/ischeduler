import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*Import Home Module components for Home module Routes*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home.component';


/*Configure Routes*/
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'calendar',
        component: CalendarComponent
      }
    ]
  }
];

/*Add routes to Home Routes Module*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutesModule { }
