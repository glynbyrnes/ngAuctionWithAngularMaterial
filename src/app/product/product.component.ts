import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$: Observable<Product | undefined> ;
  suggestedProducts$: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.product$ = this.route.paramMap
      .pipe(
        map(params => parseInt(params.get('productId') || '', 10)),
        filter(productId => !!productId),
        switchMap(productId => this.productService.getById(productId))
      ) ;

      // this.suggestedProducts$ = this.productService.getAll();
      this.suggestedProducts$ = this.route.paramMap
              .pipe( map(params => parseInt(params.get('productId') || '', 10)),
                     filter(productId => !!productId),
                     switchMap(productId => this.productService.getAll()
                                                .pipe( map(x => x.filter(y => y.id!=productId)))
                              )
                     ) ;

  }

  ngOnInit(): void {
  }

}
