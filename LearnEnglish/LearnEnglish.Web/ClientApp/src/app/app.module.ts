import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
    declarations: [AppComponent],
    imports: [    
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        HomeModule,
        AccountModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }