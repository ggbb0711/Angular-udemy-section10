import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styles:`.highlighted{
    color: deeppink
  }`
})
export class LikeComponent {
  @Input('likesCount') likesCount: number=0;
  @Input('isActive') isActive: boolean=false;

  onClick() { 
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
