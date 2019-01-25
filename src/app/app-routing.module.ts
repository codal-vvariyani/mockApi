import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { PostsComponent } from './posts/posts.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'tdf', loadChildren:'./tdf/tdf.module#TdfModule'},
  { path:'rf', loadChildren:'./rf/rf.module#RfModule'},
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, }, 
  { path: 'home', component: HomeComponent, },
  { path: 'update/:id', component: UpdateComponent},
  { path: 'view/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
