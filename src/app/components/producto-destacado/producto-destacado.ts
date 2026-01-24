import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductoDest } from '../../models/producto-destacado.model';
import { ModalService } from '../../services/servicio-prueba';

@Component({
  selector: 'app-producto-destacado',
  standalone: true,
  templateUrl: './producto-destacado.html',
  styleUrl: './producto-destacado.css',
})
export class ProductoDestacado {
  @Input() productoDest!: ProductoDest;

  constructor(
    private cartService: CartService,
    private modalService: ModalService,
  ) {}

  agregarProducto() {
    this.cartService.add(this.productoDest);

    this.modalService.abrir({
      titulo: 'Compra agregada',
      mensaje: `Agregaste ${this.productoDest.name} al carrito`,
    });
  }
}
