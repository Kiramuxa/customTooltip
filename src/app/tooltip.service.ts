import { Injectable, ViewContainerRef, ComponentFactoryResolver, Injector, TemplateRef, ElementRef, ComponentRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

export type TooltipPlacementType = "left" | "right" | 'top' | "bottom";

export interface TooltipShowContext {
  id: number,
  title: string,
  message?: string,
  placement?: string
}

export interface DynamicArrayItem {
  id: number,
  anchorRef: ElementRef,
  componentRef: ComponentRef<DynamicArrayItem>
}

@Injectable()
export class TooltipService {

  // reference container for dynamic components
  private _tooltipContainerRef: ViewContainerRef;

  // array dynamic components
  components: any[] = [];
  
  constructor( private cfResolver: ComponentFactoryResolver ) { }
  


  get tooltipContainerRef() { return this._tooltipContainerRef }
  set tooltipContainerRef(element: ViewContainerRef) {
    this._tooltipContainerRef = element;
  }



  /**
   * show dynamic component and push into array
   * @param anchorRef - host reference that adds a component
   * @param context - payload
   */
  show(anchorRef: ElementRef, context: TooltipShowContext) {

    this.remove(anchorRef);

    // create component factory
    const cFactory = this.cfResolver.resolveComponentFactory(DynamicComponent);

    // set component in container 
    const componentRef = this._tooltipContainerRef.createComponent(cFactory);

    // set parameters of the dymaminComponents
    componentRef.instance.title = context.title;
    componentRef.instance.placement = context.placement;
    componentRef.instance.hostRef = anchorRef;
    // ... //
    // ... //

    // push into the array
    this.components.push({
      id: context.id,
      anchorRef: anchorRef,
      componentRef: componentRef
    });
  }



  /**
   * remove dynamic component and delete from array
   * @param anchorRef - host reference that remove a component
   */
  remove(anchorRef: ElementRef) {

    this.components.forEach((item: DynamicArrayItem, index) => {

      // if the anchor is already bind a component
      if (item.anchorRef === anchorRef) {

        // remove from DOM
        item.componentRef.destroy();

        // remove from array
        delete this.components[index];
      }
    });
  }
}
