import { Component, signal, inject, computed } from '@angular/core';
import { AuthService } from '../../services/auth-service';

export interface ChatMessage {
  user: string;
  text: string;
  time: Date;
}

@Component({
  selector: 'app-chatinputs',
  standalone: true,
  templateUrl: './chatinputs.html',
  styleUrl: './chatinputs.css',
})
export class Chatinputs {
  private authService = inject(AuthService);

  // usuario auth
  userAuth = this.authService.user;

  // nombre visible (logueado o invitado)
  nombreDefault = computed(() => {
    const u = this.userAuth();
    return u?.displayName ?? u?.email ?? 'Invitado';
  });

  // mensajes
  mensajes = signal<ChatMessage[]>([]);

  enviarMensaje(input: HTMLInputElement) {
    const text = input.value.trim();
    if (!text) return;

    // mensaje del usuario
    this.mensajes.update((actual) => [
      ...actual,
      {
        user: this.nombreDefault(),
        text,
        time: new Date(),
      },
    ]);

    input.value = '';

    // respuesta del bot
    setTimeout(() => {
      this.mensajes.update((actual) => [
        ...actual,
        {
          user: 'Bot',
          text: this.generarRespuestaBot(text),
          time: new Date(),
        },
      ]);
    }, 700);
  }

  private generarRespuestaBot(mensaje: string): string {
    if (mensaje.toLowerCase().includes('precio')) {
      return 'Podés ver los precios en la sección destacados 💰';
    }

    if (mensaje.toLowerCase().includes('angular')) {
      return 'Tenemos cursos de Angular desde básico a avanzado 🚀';
    }

    return 'Gracias por tu mensaje 😊 Te respondemos a la brevedad.';
  }
}
