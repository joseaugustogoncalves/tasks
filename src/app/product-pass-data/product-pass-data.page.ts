import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-pass-data',
  templateUrl: './product-pass-data.page.html',
  styleUrls: ['./product-pass-data.page.scss'],
})
export class ProductPassDataPage implements OnInit {
  text: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("params", params);
      const data = JSON.parse(params["text"]);
      console.log(data);
    });
  }

}
