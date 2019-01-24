import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';

import { TdfRoutingModule } from './tdf-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CommonModule,
    TdfRoutingModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class TdfModule { }
