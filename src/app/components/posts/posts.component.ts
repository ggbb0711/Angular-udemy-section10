import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AppError } from '../../common/app-error';
import { BadInput } from '../../common/bad-input';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Post{
  id?: number;
  title: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  standalone: false
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe((posts: any) => this.posts = posts as Post[]);
  }

  createPost(input: HTMLInputElement) {
    let post:Post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost: any) => {
          post.id = (newPost as Post).id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post:Post) {
    this.service.update(post)
      .subscribe(
        (updatedPost:any) => {
          console.log(updatedPost);
        });
  }

  deletePost(post:Post) {
    this.service.delete(post.id);
  }
}
