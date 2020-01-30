import { UserService } from './shared/services/user.service';
import { BootstrapModule } from './shared/bootstrap/bootstrap/bootstrap.module';
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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormContainerComponent } from './core/containers/form-container/form-container.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    UserListComponent,
    UserComponent,
    MenuComponent,
    UserFormComponent,
    FormContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BootstrapModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
