import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EformComponent } from './eform.component';

const routes: Routes = [{ path: '', component: EformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EformRoutingModule { }
