import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { TooltipPlacementType } from '../tooltip.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements AfterViewInit {

  hostRef: ElementRef;
  @Input() title;
  @Input() placement;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.setLocation(this.placement || 'bottom' );
  }

  setLocation(placement: TooltipPlacementType) {

    switch(placement) {

      case 'bottom': {
        this.elementRef.nativeElement.style.left = 
          this.hostRef.nativeElement.offsetLeft + 'px';

        this.elementRef.nativeElement.style.top =
          (this.hostRef.nativeElement.offsetTop + 
          this.hostRef.nativeElement.offsetHeight + 10) + 'px';
        break;
      }

      case 'top': {
        this.elementRef.nativeElement.style.left =
          this.hostRef.nativeElement.offsetLeft + 'px';

        this.elementRef.nativeElement.style.top =
          (this.hostRef.nativeElement.offsetTop - 
          this.elementRef.nativeElement.offsetHeight - 10) + 'px';
        break;
      }

      case 'left': {
        this.elementRef.nativeElement.style.top =
          this.hostRef.nativeElement.offsetTop + 'px';

        this.elementRef.nativeElement.style.left =
          (this.hostRef.nativeElement.offsetLeft -
          this.elementRef.nativeElement.offsetWidth - 10) + 'px';
        break;
      }

      case 'right': {
        this.elementRef.nativeElement.style.top =
          this.hostRef.nativeElement.offsetTop + 'px';

        this.elementRef.nativeElement.style.left =
          (this.hostRef.nativeElement.offsetLeft +
          this.hostRef.nativeElement.offsetWidth + 10) + 'px';
        break;
      }

      /**
       * Default: on the top-left window angle
       */
    }
  }
  

}
