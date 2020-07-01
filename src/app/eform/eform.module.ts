import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EformRoutingModule } from './eform-routing.module';
import { EformComponent } from './eform.component';


@NgModule({
  declarations: [EformComponent],
  imports: [
    CommonModule,
    EformRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EformModule { }
