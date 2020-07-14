import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AccountModule } from './modules/account/account.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [AppComponent],
    imports: [    
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        HomeModule,
        AccountModule,
        HttpClientModule 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }