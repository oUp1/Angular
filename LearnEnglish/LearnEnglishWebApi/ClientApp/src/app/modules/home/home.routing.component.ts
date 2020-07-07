import { Routes } from '@angular/router'
import { LoginComponent } from '../account/login/login.component';
import { SigninComponent } from '../account/signin/signin.component';
import {HomeComponent} from '../home/home.component'
import { from } from 'rxjs';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: "signin",
                component: SigninComponent
            },
            {
                path: "login",
                component: LoginComponent
            }
        ]
    }
];