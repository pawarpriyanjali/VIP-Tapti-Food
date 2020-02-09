import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaptiBhojnalayComponent } from './tapti-bhojnalay.component';

const routes: Routes = [
  {
    path: '',
    component:TaptiBhojnalayComponent
  }
    
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaptiBhojnalayRoutingModule { }
