import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ModalService } from '../../services/servicio-prueba';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  constructor(
    private cartService: CartService,
    private modalService: ModalService,
  ) {}

  agregarProducto() {
    this.modalService.abrir({
      titulo: 'Compra realizada',
      mensaje: `Acabas de comprar: ${this.product.name} por $${this.product.price}`,
    });

    this.cartService.add(this.product);
  }
}
