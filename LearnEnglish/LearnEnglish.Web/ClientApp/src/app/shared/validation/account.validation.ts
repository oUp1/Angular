import { Validation } from "../interfaces/validation.interface";

export class LoginValidation implements Validation {
    validationMessages: any;
    formErrors: any;

    constructor() {
        this.validationMessages = {
            "name": {
                "required": "required",
                "minlength": "minLength 4",
                "maxlength": "maxLength 15"
            },
            "password": {
                "required": "required",
                "minlength": "minLength 6",
                "maxlength": "maxLength 15"
            },
            "birthday": {
                "required": "required",
            },
            "email": {
                "required": "required",
                "pattern": "wrong pattern"
            }
        };

        this.formErrors = {
            "name": "",
            "password": "",
            "birthday": "",
            "email": ""
        };
    }
}
export class SignInValidation implements Validation {
    validationMessages: any;
    formErrors: any;

    constructor() {
        this.validationMessages = {
            "password": {
                "required": "required",
                "minlength": "minLength 6",
                "maxlength": "maxLength 15"
            },
            "email": {
                "required": "required",
                "pattern": "wrong pattern"
            }
        };
        this.formErrors = {
            "password": "",
            "email": ""
        }
    }
}