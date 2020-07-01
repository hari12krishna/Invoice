import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasebillRoutingModule } from './purchasebill-routing.module';
import { PurchasebillComponent } from './purchasebill.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/_modal';




@NgModule({
  declarations: [PurchasebillComponent],
  imports: [
    CommonModule,
    PurchasebillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule

    
  ]
})
export class PurchasebillModule { }
