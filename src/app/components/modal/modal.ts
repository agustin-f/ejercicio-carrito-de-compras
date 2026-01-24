import { Component } from '@angular/core';
import { ModalService } from '../../services/servicio-prueba';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    @if (data(); as modal) {
      <div class="modal fade show d-block" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ modal.titulo }}</h5>
              <button type="button" class="btn-close" (click)="cerrar()"></button>
            </div>

            <div class="modal-body">
              <p>{{ modal.mensaje }}</p>
            </div>

            <div class="modal-footer">
              <button class="btn btn-secondary" (click)="cerrar()">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-backdrop fade show"></div>
    }
  `,
})
export class ModalComponent {
  data;

  constructor(private modalService: ModalService) {
    this.data = this.modalService.data; // 👈 signal
  }

  cerrar() {
    this.modalService.cerrar();
  }
}
