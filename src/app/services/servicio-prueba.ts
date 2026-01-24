import { Injectable, signal } from '@angular/core';
import { ModalData } from '../models/modal.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _data = signal<ModalData | null>(null);
  data = this._data.asReadonly();

  abrir(data: ModalData) {
    this._data.set(data);
  }

  cerrar() {
    this._data.set(null);
  }
}
