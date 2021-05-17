import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/services';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  //  ! is the 'definitive assignment opertor', i.e. telling Typescript that something
  //  will be assigned to the variable and not to worry about it.
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
