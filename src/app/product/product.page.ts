import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit, OnDestroy {
  id: number = 0;
  private sub: any;

  constructor(
    private route: ActivatedRoute
  ) { }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       console.log(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}