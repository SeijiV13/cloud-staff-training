import { FormContainerComponent } from './core/containers/form-container/form-container.component';
import { HomeComponent } from './core/containers/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'form',
  component: FormContainerComponent
},
{
  path: 'form/:id',
  component: FormContainerComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
