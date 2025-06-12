import { Component, computed, inject, Signal, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authService = inject(AuthService)

  constructor(private router: Router) {
  }
  logout() {
    this.authService.logoutUser()
    this.router.navigate(['/'])
  }
}
