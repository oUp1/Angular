import { Component, OnInit } from '@angular/core';
import { timer, from } from 'rxjs';
import { isRegExp } from 'util';
import { Router } from '@angular/router'


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    count: number = 60;
    isBiggest: boolean = false;

    constructor(private router: Router) {
    }

    getWraperStyle() {
        let backColor: string = `radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,0.5718662464985995) ${this.count}%, rgba(181,255,0,1) 100%)`
        let styles = {
            "background": "gray"
        };
        return styles;
    }

    observableTimer() {
        const source = timer(100, 20);
        const abc = source.subscribe(val => {

            this.count = this.isBiggest ? --this.count : ++this.count;

            if (this.count >= 100) this.isBiggest = true;
            if (this.count <= 0) this.isBiggest = false;
        });
    }

    ngOnInit(): void {
        //this.observableTimer();
    }

}