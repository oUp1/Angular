import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';


@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})

export class SigninComponent implements OnInit  {

    signinForm: FormGroup;

    ngOnInit(): void {
        this.signinForm = new FormGroup({
            login: new FormControl("Enter email"),
            password: new FormControl("Enter password")
        })
    }

    onSubmit(form)
    {

    }
}