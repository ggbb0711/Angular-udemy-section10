import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";
import { GithubProfileComponent } from "./components/github-profile/github-profile.component";
import { PostsComponent } from "./components/posts/posts.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { PostService } from "./services/post.service";
import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { GithubFollowersService } from "./services/github-followers.service";
import { ArchiveComponent } from "./components/home/archive.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        GithubFollowersComponent,
        GithubProfileComponent,
        PostsComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: "", component: HomeComponent },
            { path: "archive/:year/:month", component: ArchiveComponent },
            { path: '**', component: NotFoundComponent }
        ])
    ],
    providers: [
        PostService,
        GithubFollowersService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }