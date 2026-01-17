import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  public product: Product;

  constructor() {
    this.product = {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/11035543/pexels-photo-11035543.jpeg',
      name: 'Curso Angular',
      description:
        'Este es un curso para aprender las bases del framework Angular y fundamentos de Typescript.',
      price: 25000,
    };

    console.log(this.product);
  }
}
