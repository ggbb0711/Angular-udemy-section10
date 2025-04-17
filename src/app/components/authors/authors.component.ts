import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'authors',
  imports: [CommonModule],
  templateUrl: './authors.component.html',
})
export class AuthorsComponent implements OnInit {
  authors; 

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
