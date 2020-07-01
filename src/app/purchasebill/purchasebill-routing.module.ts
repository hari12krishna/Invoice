import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasebillComponent } from './purchasebill.component';

const routes: Routes = [{ path: '', component: PurchasebillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasebillRoutingModule { }
