import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation, viewChildren } from '@angular/core';

import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ProAcademy';
  display:boolean =false;
  displayTermsofServices(){
    this.display=true;
  }
  // constructor() {}


  // concept of viewChildren
  //   fullName:string='';
  // @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;
 
  // ngOnInit(){}
  // show(){
  //   let name=''
  //   this.inputElements.forEach((el)=>{
  //     console.log(el.nativeElement.value);
  // name+=el.nativeElement.value + ''
  //   })
  //   this.fullName=name.trim()
  // }

  // <!-- concept of ng container 
  //  toggle:Boolean=true;

  //  onToggle(){
  //   this.toggle =!this.toggle;
  //  }


  //  concept of component of initializtion of life cycle 
  inputVal: string = '';
  toDestroy: boolean = false;
  constructor(){
    console.log('App Component constructor called!');
  }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit Hook of AppComponent called');
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked Hook of AppComponent called');
  // }

  onBtnClicked(inputEl: HTMLInputElement){
      this.inputVal = inputEl.value;
  }

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }


  // angular-custom-class-style-diretives
  active:boolean=false;

  // concept of ngSwitch directive 
  tab:string='';

  onInfoClick(){
    this.tab='info'
  }
  onServiceClicked(){
    this.tab='services'
  }

  onPrivacyClicked(){

    this.tab='privacy'
  }
  onUserClicked(){
    this.tab='user'
  }
}
