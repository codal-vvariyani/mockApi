import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { PostsComponent } from './posts/posts.component';
const routes: Routes = [
  { path: '', redirectTo:'/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, }, 
  { path: 'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
