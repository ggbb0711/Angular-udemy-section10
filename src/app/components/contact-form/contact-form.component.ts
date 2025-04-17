import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  log(x:any) { console.log(x); }
}
