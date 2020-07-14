import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignInValidation } from '../../../shared/validation/account.validation'
import { from } from 'rxjs';
import { ValidationService } from 'src/app/core/services/validation.service';


@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class SigninComponent implements OnInit {

    signinForm: FormGroup;
    formErrors: any;

    constructor(private fb: FormBuilder, @Inject('SignInValidation') private validationService: ValidationService<SignInValidation>) {
        this.formErrors = validationService.formErrors;
    }

    ngOnInit() {
        this.buildForm();
    }

    onSubmit(form) {

    }

    buildForm() {
        this.signinForm = this.fb.group({
            "password": ["", [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(15)
            ]],
            "email": ["", [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
            ]]
        });

        this.signinForm.valueChanges.subscribe(data => this.validationService.onValueChange(this.signinForm, data));

        this.validationService.onValueChange(this.signinForm);
    }

}