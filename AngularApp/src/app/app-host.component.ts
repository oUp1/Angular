import { Component, OnChanges, ViewChild } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app-host.component.html',
})

export class AppHostComponent {
    @ViewChild(AppComponent)
    component: AppComponent;

    onChanged(id:any){
        this.component.products = this.component.products.filter(product=>product.id!=id);
    }
}