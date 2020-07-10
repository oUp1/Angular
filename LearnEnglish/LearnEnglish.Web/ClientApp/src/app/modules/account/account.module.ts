import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule }   from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
    declarations: [SigninComponent, LoginComponent],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AccountModule { }