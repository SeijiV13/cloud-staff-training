import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/containers/home/home.component';
import { BlogComponent } from './core/containers/blog/blog.component';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { UserComponent } from './core/components/user/user.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { UserFormComponent } from './core/components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    UserListComponent,
    UserComponent,
    MenuComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
