import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './MyComponents/header/header.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
