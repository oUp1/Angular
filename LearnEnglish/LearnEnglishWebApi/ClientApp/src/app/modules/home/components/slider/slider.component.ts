import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    index: number = -1;

    source: string;
    listPath: string[] = ['assets/img/fish.png', 'assets/img/lamb.png', 'assets/img/shark.png'];

    observableTimer() {
        const source = timer(1000, 3000);
        const abc = source.subscribe(val => {

            this.source = this.listPath[this.index = this.index >= 2 ? 0 : ++this.index];
        });
    }

    ngOnInit(): void {
        this.observableTimer();
    }


}