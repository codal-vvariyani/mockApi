import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
import { BlockCopyPasteDirective } from './block-copy-paste.directive';
import { GooglePlacesDirective } from './google-places.directive';
@NgModule({
  declarations: [OnlyNumberDirective, BlockCopyPasteDirective, GooglePlacesDirective],
  imports: [
    CommonModule
  ],
  exports: [OnlyNumberDirective, BlockCopyPasteDirective, GooglePlacesDirective]
})
export class SharedModuleModule { }
