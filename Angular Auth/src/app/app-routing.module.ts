import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  { path: 'register', title: 'Register', component: RegisterComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: '**', title: 'Oopsie...', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
