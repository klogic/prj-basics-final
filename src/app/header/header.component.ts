import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() receiptclick = new EventEmitter<string>();

  onReceiptClick(feature:string){
    this.receiptclick.emit(feature);
  }
}
