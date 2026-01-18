import { Component } from '@angular/core';
import { PRODUCTS } from '../../mockups/product.mockup';
import { ProductCard } from "../../components/product-card/product-card";

@Component({
  selector: 'app-cart-page',
  imports: [ProductCard],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  public productList = PRODUCTS;
}
