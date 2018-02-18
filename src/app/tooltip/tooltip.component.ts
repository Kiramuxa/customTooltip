import { Component, OnInit, Input, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { TooltipPlacementType } from '../tooltip.directive';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements AfterViewInit {

  constructor(private tooltipRef: ElementRef) { }

  // message inside tooltip
  @Input() msg: string;

  // reference to this host element
  @Input() ref: ElementRef;

  // placement relative to the host element
  @Input() placement: TooltipPlacementType


  ngAfterViewInit(): void {
    console.log(this.placement);
    this.setLocation(this.placement);
  }

  @HostListener('window:resize') onWindowResize(): void {
    // TODO onWindowResize
  }

  setLocation(placement: TooltipPlacementType) {

    switch(placement) {

      case 'bottom': {
        this.tooltipRef.nativeElement.style.left = 
          this.ref.nativeElement.offsetLeft + 'px';

        this.tooltipRef.nativeElement.style.top =
          (this.ref.nativeElement.offsetTop + 
          this.ref.nativeElement.offsetHeight + 10) + 'px';
        break;
      }

      case 'top': {
        this.tooltipRef.nativeElement.style.left = this.ref.nativeElement.offsetLeft + 'px';

        this.tooltipRef.nativeElement.style.top =
          (this.ref.nativeElement.offsetTop - 
          this.ref.nativeElement.offsetHeight - 10) + 'px';
        break;
      }

      case 'left': {
        this.tooltipRef.nativeElement.style.top =
          this.ref.nativeElement.offsetTop + 'px';

        this.tooltipRef.nativeElement.style.left =
          (this.ref.nativeElement.offsetLeft -
          this.ref.nativeElement.offsetWidth - 10) + 'px';
        break;
      }

      case 'right': {
        this.tooltipRef.nativeElement.style.top =
          this.ref.nativeElement.offsetTop + 'px';

        this.tooltipRef.nativeElement.style.left =
          (this.ref.nativeElement.offsetLeft +
          this.ref.nativeElement.offsetWidth + 10) + 'px';
        break;
      }

      /**
       * Default: on the top-right window angle
       */
    }
  }

}
