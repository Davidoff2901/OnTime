import { Component, HostListener, inject, OnInit, } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, MatIconModule, MatToolbarModule, MatButtonModule, CommonModule, MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService)
  isScrolled = false;
  router = inject(Router)
  isMobileMenuOpen = false
  currentRoute: string = '';


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  logout() {
    this.authService.logoutUser()
    this.router.navigate(['/'])
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false
  }
  onClick() {
    if (this.authService.isTokenExpired()) { this.router.navigate(['/login']) }
    else this.router.navigate(['/lineup'])
  }
}
