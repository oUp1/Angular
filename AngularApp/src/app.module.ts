import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { AppHostComponent } from './app/app-host.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AppHostComponent],
    bootstrap: [AppHostComponent]
})
export class AppModule { }