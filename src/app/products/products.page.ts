import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  items = [
    {id: 1, name: 'p1', description: 'Lorem lorem', price: 30},
    {id: 2, name: 'p2', description: 'Lorem lorem', price: 25},
    {id: 3, name: 'p3', description: 'Lorem lorem', price: 20}
  ];

  constructor() { 
    
  }

  ngOnInit() {
  }

  test(itemId:number) {
    console.log(itemId);
  }
}
