import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'app-tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.css']
})
export class TooltipWrapperComponent implements OnInit {

  components: Array<any> = [];

  constructor(
    private tooltipeService: TooltipService
  ) {
    this.components = tooltipeService.tooltipComponents;
  }

  ngOnInit() {
  }

}
