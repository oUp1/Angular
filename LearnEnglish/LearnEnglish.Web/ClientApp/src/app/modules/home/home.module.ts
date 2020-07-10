import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component'
import { routes } from './home.routing.component';
import { from } from 'rxjs';

@NgModule({
    declarations: [HomeComponent, HeaderComponent],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule { }