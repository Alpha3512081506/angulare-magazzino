import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modele/Product.modele';
import { ProductsService } from '../modele/products.service';
import { AppDataState, DataStateEnum } from '../state/product.state';

@Component({
  selector: 'app-product-practice',
  templateUrl: './product-practice.component.html',
  styleUrls: ['./product-practice.component.css']
})
export class ProductPracticeComponent implements OnInit {
  dataState$: Observable<AppDataState<Product>> | null = null;
  readonly state: DataStateEnum | null = null;
  constructor(private productPracticeService: ProductsService) { }

  ngOnInit(): void {
  }

}
