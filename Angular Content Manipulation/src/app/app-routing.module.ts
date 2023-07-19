import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './forum/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './forum/add/add.component';
import { PostComponent } from './forum/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'board', component: BoardComponent },
  { path: 'add', component: AddComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
