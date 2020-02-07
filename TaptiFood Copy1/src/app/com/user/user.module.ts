import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { NavbarComponent } from './includes/navbar/navbar.component';
import { SidenavComponent } from './includes/sidenav/sidenav.component';
import { BannerComponent } from './includes/banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';

@NgModule({
  declarations: [UserComponent,HeaderComponent,FooterComponent,NavbarComponent,SidenavComponent,BannerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
