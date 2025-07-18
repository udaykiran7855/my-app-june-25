import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplicationComponent } from './application/application.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
    import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ImageComponent } from './image/image.component';
import { MapsComponent } from './maps/maps.component';
import { WeatherComponent } from './weather/weather.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CapitalDirective } from './capital.directive';
import { RupeePipe } from './rupee.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { AboutUsModule } from './about-us/about-us.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingComponent } from './rating/rating.component';
import { CreateIdComponent } from './create-id/create-id.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ClockComponent,
    CalculatorComponent,
    DataBindingComponent,
    DirectivesComponent,
    JobsComponent,
    ApplicationComponent,
    VehiclesComponent,
    FlipkartComponent,
    MailComponent,
    ImageComponent,
    MapsComponent,
    WeatherComponent,
    VehicleDetailsComponent,
    StudentDetailsComponent,
    CreateStudentComponent,
    CapitalDirective,
    RupeePipe,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    RatingComponent,
    CreateIdComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
    StoreModule.forRoot({counter:countReducer}, {})
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
