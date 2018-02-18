import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { TooltipDirective } from './tooltip.directive';
import { TooltipWrapperComponent } from './tooltip-wrapper/tooltip-wrapper.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipService } from './tooltip.service';


@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    TooltipWrapperComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
