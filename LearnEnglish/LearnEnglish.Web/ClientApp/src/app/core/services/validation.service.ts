import { Injectable } from "@angular/core";
import { Validation } from "../../shared/interfaces/validation.interface"
import { from } from "rxjs";
import { FormGroup } from "@angular/forms";

@Injectable()
export class ValidationService <T extends Validation>
{
    formErrors: any;
    validationMessages: any;
    
    constructor(validation : T){
        this.formErrors = validation.formErrors;
        this.validationMessages = validation.validationMessages;
    }

    onValueChange(form: FormGroup, data?: any) {
        if (!form) return;

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


}