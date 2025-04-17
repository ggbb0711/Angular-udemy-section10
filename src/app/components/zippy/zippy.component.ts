import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  imports: [CommonModule],
  templateUrl: './zippy.component.html',
})
export class ZippyComponent  {
  @Input('title') title: string = "";
  isExpanded: boolean = false;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

}
