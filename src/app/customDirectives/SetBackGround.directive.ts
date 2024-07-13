import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground{
    // private element:ElementRef;
    // private renderer:Renderer2;

    // @Input('setBackground') backColor:string='#36454F';
    // @Input() textColor:string='White';
    // @Input() title:string='My Title';

    @Input('setBackground') changeTextAndBeckColor:{backColor:string, textColor:string}
  constructor(private element:ElementRef, private renderer:Renderer2){
//  this.element=element;
this.renderer=renderer;
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor='#36454F';
    this.element.nativeElement.style.color='white';
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBeckColor.backColor);

    // this.renderer.setStyle(this.element.nativeElement, 'color', 'white')
    // this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor)
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBeckColor.textColor)

    // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title');
    // this.renderer.removeClass
  }
}