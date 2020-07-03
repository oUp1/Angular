import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HeaderComponent} from 'app/modules/home/components/header/header.component'
import {SliderComponent} from 'app/modules/home/components/slider/slider.component'
import { from } from 'rxjs';

@NgModule({
    declarations: [HomeComponent, HeaderComponent,SliderComponent],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule     
    ]
})
export class HomeModule { }