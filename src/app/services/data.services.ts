import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mockups/product.mockup';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  guardarProductos(product: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {
    function guardarProductos(this: any, PRODUCTS: Product[], arg1: Product) {
      this.http
        .post('https://codesign-f526f-default-rtdb.firebaseio.com/datos.json', PRODUCTS)
        .susbscribe(
          (response: any) => {
            console.log(response);
          },
          (error: any) => {
            console.error(error);
          },
        );
    }
  }
}
