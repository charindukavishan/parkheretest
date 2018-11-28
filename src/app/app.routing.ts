import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReceiveComponent } from './profile/receive/receive.component';
import { ParkkeepersComponent } from './profile/parkkeepers/parkkeepers.component';
import { MapComponent } from './profile/map/map.component';
import { EditpropicComponent } from './profile/editpropic/editpropic.component';
import { ProfileeditComponent } from './profile/profileedit/profileedit.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent ,canActivate:[AuthGuard]
    ,children:[
      {path: 'send', component: FileUploadComponent},
    //   {path: 'settings', component: SettingsComponent},
      {path: 'inbox', component: ReceiveComponent},
      {path: 'edit', component: ProfileeditComponent},
      { path: 'myparks',      component: ParkkeepersComponent },
      { path: 'map',      component: MapComponent },
      { path: 'pic',      component:EditpropicComponent },
      { path: '',   redirectTo: 'userHome', pathMatch: 'full' },
 
    ]
    },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'signin',      component: SigninComponent },
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
