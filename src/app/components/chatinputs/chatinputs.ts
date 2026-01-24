import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ModalService } from '../../services/servicio-prueba';

export interface ChatMessage {
  user: string;
  text: string;
  time: Date;
}

@Component({
  selector: 'app-chatinputs',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './chatinputs.html',
  styleUrl: './chatinputs.css',
})
export class Chatinputs {
  constructor(private modalService: ModalService) {}

  // 👇 estado reactivo
  mensajes = signal<ChatMessage[]>([]);

  enviarMensaje(userInput: HTMLInputElement, messageInput: HTMLInputElement) {
    const text = messageInput.value.trim();
    const user = userInput.value.trim() || 'Usuario';

    this.modalService.abrir({
      titulo: 'Nuevo mensaje',
      mensaje: `Usuario: ${user}\nMensaje: ${text}`,
    });

    if (!text) return;

    // mensaje del usuario
    this.mensajes.update((actual) => [
      ...actual,
      {
        user,
        text,
        time: new Date(),
      },
    ]);

    messageInput.value = '';

    // respuesta del bot
    setTimeout(() => {
      this.mensajes.update((actual) => [
        ...actual,
        {
          user: 'Bot',
          text: 'Gracias por tu mensaje 🤖',
          time: new Date(),
        },
      ]);
    }, 800);
  }
}
