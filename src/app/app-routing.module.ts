import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-post/active-post.component';
import { InactivePostComponent } from './inactive-post/inactive-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
   component: HomeComponent,
    title: 'Home'
},
{
  path: 'active-post',
  component: ActivePostsComponent,
  title:'active'
},
{
  path:'inactive-post',
  component: InactivePostComponent
},
{
  path:'post/:id',
  component: PostDetailComponent
},
{
  path:'**',
  component: Page404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
