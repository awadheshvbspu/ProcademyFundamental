import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
  @Input('appStyle') set style(styles:Object){
    let styleEntries=Object.entries(styles)
    // console.log(styleEntries);
    for(let item in styleEntries){
      let[cssStyle, value] =item;
      // console.log(cssStyle, value)
      this.renderer.setStyle(this.element.nativeElement, cssStyle, value)
    }
  }
}
