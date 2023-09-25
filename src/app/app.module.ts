import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule } from '@angular/common/http'
import{HttpClient } from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './Services/user-service.service';
import { AlertifyService } from './Services/alertify.service';
import { AuthService } from './Services/auth.service';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
 

const appRoutes: Routes = [
  {path: 'add-property',component: AddPropertyComponent},
  {path: 'rent-property',component: PropertyListComponent},
  {path: '',component: PropertyListComponent},
  {path: 'property-detail/:id',
          component: PropertyDetailComponent, 
          resolve:{prp: PropertyDetailResolverService}},
  {path: 'user/login',component: UserLoginComponent},
  {path: 'user/register',component: UserRegisterComponent},
  {path: '**',component: PropertyListComponent}
 
]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
    
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule ,
    BsDropdownModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule

  ],

  providers: [
    HttpClient,
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService,
    { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } },
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
