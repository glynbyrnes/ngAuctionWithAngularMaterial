import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';


const ROUTES: Routes = [{path: '', component: ProductComponent}] ;

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductSuggestionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProductModule { }
