var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { timer } from 'rxjs';
let HomeComponent = class HomeComponent {
    constructor() {
        this.count = 60;
        this.isBiggest = false;
    }
    getWraperStyle() {
        let backColor = `radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,0.5718662464985995) ${this.count}%, rgba(181,255,0,1) 100%)`;
        let styles = {
            "background": backColor
        };
        return styles;
    }
    observableTimer() {
        const source = timer(100, 20);
        const abc = source.subscribe(val => {
            this.count = this.isBiggest ? --this.count : ++this.count;
            if (this.count >= 100)
                this.isBiggest = true;
            if (this.count <= 0)
                this.isBiggest = false;
        });
    }
    ngOnInit() {
        this.observableTimer();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map