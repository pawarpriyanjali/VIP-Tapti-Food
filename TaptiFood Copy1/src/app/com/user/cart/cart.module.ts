import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
