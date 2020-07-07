var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { timer } from 'rxjs';
let SliderComponent = class SliderComponent {
    constructor() {
        this.index = -1;
        this.listPath = ['assets/img/fish.png', 'assets/img/lamb.png', 'assets/img/shark.png'];
    }
    observableTimer() {
        const source = timer(1000, 3000);
        const abc = source.subscribe(val => {
            this.source = this.listPath[this.index = this.index >= 2 ? 0 : ++this.index];
        });
    }
    ngOnInit() {
        this.observableTimer();
    }
};
SliderComponent = __decorate([
    Component({
        selector: 'slider',
        templateUrl: './slider.component.html',
        styleUrls: ['./slider.component.scss']
    })
], SliderComponent);
export { SliderComponent };
//# sourceMappingURL=slider.component.js.map