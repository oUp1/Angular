var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'app/modules/home/components/header/header.component';
import { SliderComponent } from 'app/modules/home/components/slider/slider.component';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [HomeComponent, HeaderComponent, SliderComponent],
        imports: [
            BrowserModule,
            RouterModule,
            FormsModule
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map