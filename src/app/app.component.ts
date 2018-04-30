import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedHeader = 'recipe'
  onNavigateclick(data:string){
    this.loadedHeader = data
  }
}
