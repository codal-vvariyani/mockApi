import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RfRoutingModule } from './rf-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RfRoutingModule,
    ReactiveFormsModule
  ]
})
export class RfModule { }
