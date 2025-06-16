import { Component, inject, OnInit, } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FestivalsService } from '../../services/festivals.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StagesService } from '../../services/stage.service';
import { TicketsService } from '../../services/tickets.service';
import { Festival, Stage, } from '../../models/models.type';
import { AuthService } from '../../services/auth.service';
import { MatDialog, } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FestivalDialogComponent } from '../../components/festival-dialog/festival-dialog.component';
import { StageDialogComponent } from '../../components/stage-dialog/stage-dialog.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { PerformancesService } from '../../services/performance.service';
@Component({
  selector: 'app-festivals-admin',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, CommonModule, MatIconModule, MatExpansionModule],
  providers: [],
  templateUrl: './festivals-admin.component.html',
  styleUrl: './festivals-admin.component.scss'
})
export class FestivalsAdminComponent implements OnInit {
  festivalsService = inject(FestivalsService)
  performanceService = inject(PerformancesService)
  stagesService = inject(StagesService)
  ticketsService = inject(TicketsService)
  authService = inject(AuthService)
  private dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar)

  ngOnInit(): void {
    this.loadFestivals()
  }
  loadFestivals() {
    this.festivalsService.getFestivalsByOrganizer(this.authService.getEmail()!).subscribe({
      next: res => {
        this.festivalsService.festivals.set(res)
      },
      error: err => {
        this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
      }
    })
  }

  openCreateFestivalDialog(): void {
    const dialogRef = this.dialog.open(FestivalDialogComponent, {
      height: '80%',
      maxWidth: 'none',
      panelClass: 'custom-dialog-container',
      data: { festival: undefined }
    });

    dialogRef.afterClosed().subscribe((result: Festival) => {
      if (result) {
        this.festivalsService.createFestival(result).subscribe({
          next: res => {
            this.snackBar.open(`Festival "${res.name}" created successfully!`, 'Close', { duration: 2000 });
            this.loadFestivals();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }

  openUpdateFestivalDialog(festival: Festival): void {
    const dialogRef = this.dialog.open(FestivalDialogComponent, {
      data: { festival: festival }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.festivalsService.updateFestival(result).subscribe({
          next: res => {
            this.snackBar.open(`Festival "${res.name}" updated successfully!`, 'Close', { duration: 2000 });
            this.loadFestivals();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }

  openAddStageDialog(festivalId: string): void {
    const dialogRef = this.dialog.open(StageDialogComponent, {
      data: { festivalId: festivalId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stagesService.createStage(result).subscribe({
          next: res => {
            this.snackBar.open(`Stage "${res.name}" created successfully!`, 'Close', { duration: 2000 });
            this.loadFestivals();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
  openUpdateStageDialog(stage: Stage): void {
    const dialogRef = this.dialog.open(StageDialogComponent, {
      data: { stage: stage, }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stagesService.updateStage(result).subscribe({
          next: res => {
            this.snackBar.open(`Stage "${res.name}" created successfully!`, 'Close', { duration: 2000 });
            this.loadFestivals();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
  deleteStage(stageId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { stageId: stageId, title: "Are you sure you want to delete this stage?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stagesService.deleteStage(stageId).subscribe({
          next: res => {
            this.snackBar.open(`Stage deleted successfully!`, 'Close', { duration: 2000 });
            this.loadFestivals();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
  openScheduleDialog(festival: Festival): void {
    if (festival.stages?.length === 0) {
      this.snackBar.open("Create stages first to add schedules", 'Dismiss', { duration: 3000 });
      return;
    }
    const dialogRef = this.dialog.open(ScheduleComponent, {
      data: { festival: festival }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.performanceService.createPerformance(result).subscribe({
          next: res => {
            this.snackBar.open(`Performance created successfully!`, 'Close', { duration: 2000 });
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
}
