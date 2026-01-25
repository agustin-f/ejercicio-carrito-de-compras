import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [RouterLink],
})
export class NavbarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.user;

  nombreUsuario = computed(() => {
    const u = this.user();
    if (!u) return null;
    return u.displayName ?? u.email?.split('@')[0];
  });

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
