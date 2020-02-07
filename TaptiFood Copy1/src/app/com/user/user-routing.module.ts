import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [

  {
    path: '',
    component:UserComponent,
    children: [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    { path: 'hotel/tapti bhojnalay', loadChildren: './hotel/tapti-bhojnalay/tapti-bhojnalay.module#TaptiBhojnalayModule' },
    { path: 'address', loadChildren: './address/address.module#AddressModule' }
  ]
    
    } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
