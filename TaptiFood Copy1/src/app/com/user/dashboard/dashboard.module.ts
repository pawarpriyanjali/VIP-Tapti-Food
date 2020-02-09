import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SliderComponent } from '../includes/slider/slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent,SliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
