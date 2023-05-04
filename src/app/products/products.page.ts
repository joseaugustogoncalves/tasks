import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

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

  constructor(
    private router: Router,
    private navController: NavController,
  ) {}

  ngOnInit() {
  }

  getProductsDetails(itemId:number) {
    console.log(itemId);
    this.router.navigate(['/product', itemId]);
  }

  getProductsDetailsWithNavaParama(itemId:number) {
    console.log(itemId);
    this.router.navigateByUrl('/product-pass-data-nav-parms',  { state: { id:1 , name:'Angular' } });
  }

  getProductDetailsWithExtras(itemId:number) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify({text: 'A passar data'})
      }
    };

    this.navController.navigateForward(['product-pass-data'], navigationExtras);
  }
}
