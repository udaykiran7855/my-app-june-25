import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
     {path:'home',component:HomeComponent},
     {path:'home',component:HomeComponent},
      {path:'clock',component:ClockComponent},
      {path:'calculator',component:CalculatorComponent}, 
      {path:'data-binding',component:DataBindingComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'jobs', component:JobsComponent}


  ]},

  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
