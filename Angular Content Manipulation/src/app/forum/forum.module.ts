import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    BoardComponent,
    AddComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BoardComponent,
    AddComponent,
    PostComponent
  ]
})
export class ForumModule { }
