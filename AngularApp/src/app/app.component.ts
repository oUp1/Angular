import { Component, Input, OnInit } from '@angular/core';

class Product {
    id: number;
    name: string;
    price: number;
}
@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
    @Input("rows")
    rows: number;

    products: Product[] = [
        { id: 1, name: "product 1", price: 100 },
        { id: 2, name: "product 2", price: 200 },
        { id: 3, name: "product 3", price: 300 },
        { id: 4, name: "product 4", price: 400 },
        { id: 5, name: "product 5", price: 500 },
        { id: 6, name: "product 6", price: 600 },
        { id: 7, name: "product 7", price: 700 },
        { id: 8, name: "product 8", price: 800 },
        { id: 9, name: "product 9", price: 900 },
        { id: 10, name: "product 10", price: 1000 },
    ];

    ngOnInit() {
        console.log("some " + this.rows);
        this.products = this.products.slice(0, this.rows);
    }
}