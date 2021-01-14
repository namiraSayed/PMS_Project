import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

import { NbInputModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbAlertModule } from '@nebular/theme';
import { NbAccordionModule } from '@nebular/theme';
import { NbRadioModule } from '@nebular/theme';
import { NbSelectModule } from '@nebular/theme';
import { NbDatepickerModule } from '@nebular/theme';
import { NbToggleModule } from '@nebular/theme';

import { GuestProfileComponent } from './guest-profile/guest-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    GuestProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbAlertModule,
    NbAccordionModule,
    NbRadioModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbToggleModule

  ],
  providers: [
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbAlertModule,
    NbAccordionModule,
    NbRadioModule,
    NbSelectModule,
    NbDatepickerModule,
    NbToggleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
