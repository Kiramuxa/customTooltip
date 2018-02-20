import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewContainerRef, ViewRef } from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css']
})
export class TooltipContainerComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef}) vcRef: ViewContainerRef;

  constructor(
    private ttService: TooltipService
  ) { }
  
  ngAfterViewInit() {
    this.ttService.tooltipContainerRef = this.vcRef;
  }

}
