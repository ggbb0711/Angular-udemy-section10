import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  standalone: false
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(private route: ActivatedRoute,private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combined=>{
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      return this.service.getAll();
    }))
    .subscribe((followers:any)=>{
      this.followers = followers;
    })
  }
}
