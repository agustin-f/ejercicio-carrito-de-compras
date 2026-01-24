import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductoDest } from '../../models/producto-destacado.model';

@Component({
  selector: 'app-producto-destacado',
  imports: [],
  templateUrl: './producto-destacado.html',
  styleUrl: './producto-destacado.css',
})
export class ProductoDestacado {
  @Input() ProductoDest!: ProductoDest;
  constructor(private cartService: CartService) {}

  agregarProducto() {
    this.cartService.add(this.ProductoDest);
  }
}
