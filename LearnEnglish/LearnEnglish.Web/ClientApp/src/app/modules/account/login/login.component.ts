import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class LoginComponent implements OnInit {

    constructor(private fb: FormBuilder) { }

    loginForm: FormGroup;
    formErrors = {
        "name": "",
        "password": "",
        "birthday": "",
        "email": ""
    }
    validationMessages = {
        "name": {
            "required": "required",
            "minlength": "minLength",
            "maxlength": "maxLength"
        },
        "password": {
            "required": "required",
            "minlength": "minLength",
            "maxlength": "maxLength"
        },
        "birthday": {
            "required": "required",
        },
        "email": {
            "required": "required",
            "pattern": "wrong pattern"
        }
    }

    ngOnInit() {
        this.buildForm();
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

        this.loginForm.valueChanges.subscribe(data => this.onValueChange(data));

        this.onValueChange();
    }

    onValueChange(data?: any) {
        if (!this.loginForm) return;
        let form = this.loginForm;

        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];
                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }

    onSubmit(form) {

    }
}
