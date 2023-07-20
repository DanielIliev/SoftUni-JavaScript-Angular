import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { HomeComponent } from './core/home/home.component';
import { ProtectedComponent } from './core/protected/protected.component';
import { GuestGuardService } from './guards/guest-guard.service';
import { UserGuardService } from './guards/user-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', title: 'Register', component: RegisterComponent, canActivate: [GuestGuardService] },
  { path: 'login', title: 'Login', component: LoginComponent, canActivate: [GuestGuardService] },
  { path: 'protected', title: 'Protected', component: ProtectedComponent, canActivate: [UserGuardService] },
  { path: '**', title: 'Oopsie...', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
