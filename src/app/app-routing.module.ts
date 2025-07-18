import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplicationComponent } from './application/application.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ImageComponent } from './image/image.component';
import { MapsComponent } from './maps/maps.component';
import { WeatherComponent } from './weather/weather.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { CreateIdComponent } from './create-id/create-id.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
     {path:'home',component:HomeComponent},
     {path:'home',component:HomeComponent},
      {path:'clock',component:ClockComponent},
      {path:'calculator',component:CalculatorComponent}, 
      {path:'data-binding',component:DataBindingComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'jobs', component:JobsComponent},
      {path:'application', component:ApplicationComponent},
      {path:'vehicles' , component:VehiclesComponent},
      {path:'flipkart' , component:FlipkartComponent},
      {path:'mail' , component:MailComponent},
      {path:'image' , component:ImageComponent},
      {path:'maps' , component:MapsComponent},
       {path:'weather' , component:WeatherComponent},
       {path:'vehicle-details/:id' , component:VehicleDetailsComponent},
       {path:'edit-vehicle/:id' ,component:VehiclesComponent},
       {path:'student-details' , component:StudentDetailsComponent},
       {path:'create-id' , component:CreateIdComponent},
       {path:'create-student', component:CreateStudentComponent},
       {path:'parent' , component:ParentComponent},
       {path:'sibling1', component:Sibling1Component},
       {path:'sibling2', component:Sibling2Component},
       {path:'payments',
        loadChildren: () => import('./payments/payments.module').then(m=> m.PaymentsModule)
        }



  ]},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
