import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'app/modules/home/home.module';
import { MainModule } from 'app/modules/main/main.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        HomeModule,
        MainModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }