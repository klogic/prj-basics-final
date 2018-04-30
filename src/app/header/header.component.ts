import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() headervalue = new EventEmitter<string>();

  onHeaderclick(headerdata:string){
    this.headervalue.emit(headerdata);
  }
}
