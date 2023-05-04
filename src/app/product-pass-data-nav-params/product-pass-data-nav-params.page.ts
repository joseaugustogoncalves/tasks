import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-pass-data-nav-params',
  templateUrl: './product-pass-data-nav-params.page.html',
  styleUrls: ['./product-pass-data-nav-params.page.scss'],
})
export class ProductPassDataNavParamsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const data = this.router.getCurrentNavigation()?.extras.state;

    console.log(data);
  }

}
