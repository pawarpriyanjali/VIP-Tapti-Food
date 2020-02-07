import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaptiBhojnalayComponent } from './tapti-bhojnalay.component';
import { TaptiBhojnalayRoutingModule } from './tapti-bhojnalay-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaptiBhojnalayComponent],
  imports: [
    CommonModule,
    FormsModule,
    TaptiBhojnalayRoutingModule
  ]
})
export class TaptiBhojnalayModule { }
