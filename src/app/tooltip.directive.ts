import { Directive, ElementRef, HostListener, Input, OnDestroy, ViewContainerRef, TemplateRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { TooltipService, TooltipShowContext, TooltipPlacementType } from './tooltip.service';
import { DynamicComponent } from './dynamic/dynamic.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip: string;
  @Input() placement: TooltipPlacementType;

  constructor(
    private ttService: TooltipService,
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseover') show() {
    const context: TooltipShowContext = {
      id: Math.random(),
      title: this.tooltip,
      placement: this.placement
    }

    this.ttService.show(this.elementRef, context);
  }

  @HostListener('mouseleave') remove() {
    this.ttService.remove(this.elementRef);
  }
}
