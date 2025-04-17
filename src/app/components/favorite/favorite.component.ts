import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean=false;
  @Output('change') click = new EventEmitter();

  onClick() { 
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
