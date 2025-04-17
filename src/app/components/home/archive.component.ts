import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest } from "rxjs";


@Component({
    selector: 'archive',
    template: `
        <h1>Archive for {{year}}/{{month}}</h1>
        <button (click)="moveBack()">See all</button>
    `,
    standalone: false
})
export class ArchiveComponent implements OnInit{
    year: string = ""
    month: string = ""
    constructor(private route: ActivatedRoute, private router: Router){}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const year = params.get('year') as string;
            const month = params.get('month') as string;

            this.year = year
            this.month = month
        })
    }
    
    moveBack(){
        this.router.navigate([''])
    }
    
}