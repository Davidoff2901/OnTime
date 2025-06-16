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

@Component({
  selector: 'app-line-up',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, CommonModule, MatExpansionModule, MatDividerModule, RouterLink],
  templateUrl: './line-up.component.html',
  styleUrl: './line-up.component.scss'
})
export class LineUpComponent implements OnInit {
  performanceService = inject(PerformancesService)
  ticketsService = inject(TicketsService)
  authService = inject(AuthService)

  festivals = signal<any>([])


  ngOnInit(): void {
    const email = this.authService.getEmail()
    this.ticketsService.getFestivalsByTicket(email!).subscribe({
      next: res => {
        this.festivals.set(res)
      }
    })
  }
}
