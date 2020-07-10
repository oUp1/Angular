import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor(private router: Router) { }

    RedirectToLogin(): void {
        this.router.navigate(['home/login']);
    }
    RedirectToSignIn(): void {
        this.router.navigate(['home/signin']);
    }
}