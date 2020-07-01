import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { InvoiceComponent } from './invoice/invoice.component';


const routes: Routes = [
  {path:'',redirectTo:'/eform',pathMatch:'full'},
  { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'purchasebill', loadChildren: () => import('./purchasebill/purchasebill.module').then(m => m.PurchasebillModule) },
  { path: 'eform', loadChildren: () => import('./eform/eform.module').then(m => m.EformModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
