import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { routes } from './app.routing.module';
import {AppComponent} from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule.forRoot(routes, { enableTracing: false }),
        BrowserModule,
        FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule { }