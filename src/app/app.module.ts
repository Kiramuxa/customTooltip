import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { TooltipDirective } from './tooltip.directive';

import { TooltipService } from './tooltip.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    DynamicComponent,
    TooltipContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    DynamicComponent
  ],
  providers: [TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
