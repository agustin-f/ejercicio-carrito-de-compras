import { Injectable, signal, computed } from '@angular/core';

export interface User {
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);

  user = this._user.asReadonly();

  isLoggedIn = computed(() => !!this._user());

  login(email: string) {
    this._user.set({ email });
  }

  logout() {
    this._user.set(null);
  }
}
