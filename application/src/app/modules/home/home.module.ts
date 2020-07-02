import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule { }