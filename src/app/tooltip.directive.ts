import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { TooltipService } from './tooltip.service';

export type TooltipPlacementType = "left" | "right" | 'top' | "bottom";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {

  constructor(
    private el: ElementRef,
    private tooltipService: TooltipService
  ) { }

  // message inside the tooltip
  @Input() tooltipMsg: string = '';
  
  // location tooltip relative to the host
  @Input() tooltipPlacement: TooltipPlacementType;;

  private id: number;


  @HostListener('mouseenter') showTooltip() {
    this.id = Math.random();
    this.tooltipService.tooltipComponents.push({
      id: this.id,
      ref: this.el,
      msg: this.tooltipMsg,
      placement: this.tooltipPlacement
    });
    console.log(this.tooltipPlacement);
  }

  @HostListener('mouseleave') removeTooltip() {
    this.destroy();
  }

  ngOnDestroy() {
    this.destroy();
  }

  destroy() {
    const idx = this.tooltipService.tooltipComponents.findIndex((t) => { 
      return t.id === this.id; 
    });

    this.tooltipService.tooltipComponents.splice(idx, 1);
  }
}
