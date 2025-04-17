import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";
import { LikeComponent } from './components/like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
}
