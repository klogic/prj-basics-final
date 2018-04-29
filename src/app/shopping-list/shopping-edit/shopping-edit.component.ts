import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredentAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(nameInput, amountInput){
    const newIngredent = new Ingredient(nameInput.value, amountInput.value)
    this.ingredentAdded.emit(newIngredent)
  }

}
