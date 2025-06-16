import { Component, HostListener, inject, } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, MatIconModule, MatToolbarModule, MatButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authService = inject(AuthService)
  isScrolled = false;
  router = inject(Router)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  logout() {
    this.authService.logoutUser()
    this.router.navigate(['/'])
  }
}
