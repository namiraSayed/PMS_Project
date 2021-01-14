import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'guest-profile',
    component: GuestProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
