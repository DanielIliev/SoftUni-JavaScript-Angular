import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';

@NgModule({
  declarations: [
    NotfoundComponent,
    HomeComponent,
    ProtectedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ProtectedComponent,
    NotfoundComponent
  ]
})
export class CoreModule { }
