import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NavMenuComponent } from './components/content/components/nav/nav-menu.component';

@NgModule({
    declarations: [MainComponent, HeaderComponent, ContentComponent, NavMenuComponent],
    imports: [
        RouterModule
    ]
})
export class MainModule { }