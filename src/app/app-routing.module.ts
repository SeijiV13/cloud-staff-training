import { BlogComponent } from './core/containers/blog/blog.component';
import { HomeComponent } from './core/containers/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'blog',
  component: BlogComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
