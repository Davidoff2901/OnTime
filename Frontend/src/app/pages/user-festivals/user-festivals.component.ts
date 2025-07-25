import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { PerformancesService } from '../../services/performance.service';
import { TicketsService } from '../../services/tickets.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormatTimePipe } from '../../helpers/formatters.pipe';

@Component({
  selector: 'app-user-festivals',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, CommonModule, FormatTimePipe,
    MatExpansionModule, MatDividerModule, RouterLink, PrimaryButtonComponent],
  templateUrl: './user-festivals.component.html',
  styleUrl: './user-festivals.component.scss'
})
export class UserFestivalsComponent {
  performanceService = inject(PerformancesService)
  ticketsService = inject(TicketsService)
  authService = inject(AuthService)

  festivals = signal<any>([])

  ngOnInit(): void {
    const email = this.authService.getEmail()
    this.ticketsService.getFestivalsByTicket(email!).subscribe({
      next: res => {
        this.festivals.set(res)
        console.log(res)
      }
    })
  }
}
