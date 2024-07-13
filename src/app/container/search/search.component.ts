import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string='';
  //  create an event
  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>()

  onSearchTextChanged(){
  //  this.searchTextChanged.emit(this.searchText)
  }
  // updateSearchText(event:any){
  //   this.searchText = event.target.value;
  //   console.log(event.target.value);
    
  // }
//  optional 2nd arguement of viewChild
// 1.read: use it to read the different taken from the queired elements
// 2.static 
  //  @ViewChild('searchInput', {static:true}) searchInputEl:ElementRef;
  @ViewChild('searchInput') searchInputEl:ElementRef;

   
  updateSearchText(){
  this.searchText=this.searchInputEl.nativeElement.value;
  this.searchTextChanged.emit(this.searchText);
    
  }
  // updateSearchText(inputEl:HTMLInputElement){
  //   // this.searchText = event.target.value;
  // //  console.log(inputEl.value);
  // this.searchText=inputEl.value;
  // this.searchTextChanged.emit(this.searchText);
    
  // }
}
