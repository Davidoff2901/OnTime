import { Component, inject, signal, } from '@angular/core';
import { LineupService } from '../../services/lineup.service';
import { AuthService } from '../../services/auth.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormatDatePipe, FormatTimePipe } from '../../helpers/formatters.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-line-up',
  imports: [MatExpansionModule, RouterLink, CommonModule, MatCardModule , FormatDatePipe, FormatTimePipe, MatIconModule],
  templateUrl: './line-up.component.html',
  styleUrl: './line-up.component.scss'
})
export class LineUpComponent {
  lineupService = inject(LineupService)
  authService = inject(AuthService)

  ngOnInit(): void {
    const email = this.authService.getEmail()
    this.lineupService.getUserLineup(email!).subscribe({
      next: res => {
        console.log(res)
        this.lineupService.lineup.set(res)
      }
    })
  }
}
