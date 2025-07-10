import { Component, inject, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FestivalsService } from '../../services/festivals.service';
@Component({
  selector: 'app-tickets',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent implements OnInit {
  ticketsService = inject(TicketsService)
  festivalsService = inject(FestivalsService)
  authService = inject(AuthService)


  ngOnInit(): void {
    this.festivalsService.getFestivals().subscribe({
      next: res => {
        this.festivalsService.festivals.set(res)
      }, error: err => {
        this.festivalsService.error.set(err.error.message)
      }
    })
  }


  purchase(festivalId: string) {
    const email = this.authService.getEmail()
    if (email) {
      this.ticketsService.createTicket({ festivalId: festivalId, email: email }).subscribe({

      })
    }
  }
  getAsciiSum(str: string): number {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return Math.round(sum / 10);
  }
}