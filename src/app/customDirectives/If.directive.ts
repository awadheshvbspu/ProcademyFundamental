import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appIf]'
})

export class IfDirective{
    //1. Get access to the dom element which we want to add/remove
    //2.Place from where we want to  add or remove dom element
    // constructor(private template:TemplateRef<any>, private viewContainer:ViewContainerRef){}
    constructor(private view:TemplateRef<any>, private template:ViewContainerRef){}

    @Input() set appIf(condition:boolean){
        if(condition){
         this.template.createEmbeddedView(this.view)
        }
        else{
          this.template.clear();      
        }
    }
}