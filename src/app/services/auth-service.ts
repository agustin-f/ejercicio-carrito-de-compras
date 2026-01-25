import { Injectable, signal } from '@angular/core';

export interface User {
  email: string;
  displayName?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);

  user = this._user;

  login(email: string, password: string): void {
    // 👉 mock login simple
    if (!email || !password) {
      throw new Error('Credenciales inválidas');
    }

    // simulamos usuario logueado
    this._user.set({
      email,
      displayName: email.split('@')[0],
    });
  }

  logout(): void {
    this._user.set(null);
  }

  isLoggedIn(): boolean {
    return this._user() !== null;
  }
}
