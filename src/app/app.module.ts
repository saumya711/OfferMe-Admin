import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AddvComponent } from './addv/addv.component';
import { UserComponent } from './user/user.component';
import { SubsComponent } from './subs/subs.component';
import { ChartComponent } from './chart/chart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FotterComponent } from './fotter/fotter.component';
import { ProfileComponent } from './profile/profile.component';
import { MinChartComponent } from './min-chart/min-chart.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    AddvComponent,
    UserComponent,
    SubsComponent,
    ChartComponent,
    LinechartComponent,
    NavbarComponent,
    FotterComponent,
    ProfileComponent,
    MinChartComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'dash',component:DashboardComponent},
      
      {path:'home',component:HomeComponent},
      {path:'add',component:AddvComponent},
      {path:'user',component:UserComponent},
      {path:'profile',component:ProfileComponent},
      {path:'sub',component:SubsComponent},
    ])
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
