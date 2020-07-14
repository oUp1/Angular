import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginValidation } from '../../../shared/validation/account.validation'
import { from } from 'rxjs';
import { ValidationService } from 'src/app/core/services/validation.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    formErrors : any;

    constructor(private fb: FormBuilder, @Inject('LoginValidation') private validationService: ValidationService<LoginValidation>){
        this.formErrors = validationService.formErrors;
     }
    
    ngOnInit() {
        this.buildForm();
    }
    onSubmit(form) {

    }

    buildForm() {
        this.loginForm = this.fb.group({
            "name": ["", [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(15)]],
            "password": ["", [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(15)
            ]],
            "birthday": ["", [
                Validators.required,

            ]],
            "email": ["", [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
            ]]
        });

        this.loginForm.valueChanges.subscribe(data => this.validationService.onValueChange(this.loginForm, data));

        this.validationService.onValueChange(this.loginForm);
    }

}
