import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
   
  @Input('appClass') set display(value:Object){
   let entries=Object.entries(value)
   for(let item of entries){
  let[className, condition]= item;
    //  console.log(entries[0],item[1]);
    if(item[1]){
      // this.renderer.addClass(this.element.nativeElement, item[0]);
      this.renderer.addClass(this.element.nativeElement, className);

    }
   }
   
  };
}
