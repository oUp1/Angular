import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule }   from '@angular/forms';
import { from } from 'rxjs';
import { ValidationService } from 'src/app/core/services/validation.service';
import { SignInValidation, LoginValidation } from 'src/app/shared/validation/account.validation';

@NgModule({
    declarations: [SigninComponent, LoginComponent],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [{ provide: 'SignInValidation', useFactory: () => (new ValidationService<SignInValidation>(new SignInValidation())) },
                { provide: 'LoginValidation', useFactory: () => (new ValidationService<LoginValidation>(new LoginValidation())) }]
})
export class AccountModule { }