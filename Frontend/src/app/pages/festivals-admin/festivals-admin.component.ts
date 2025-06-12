import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FestivalsService } from '../../services/festivals.service';
import { MatSelectModule } from '@angular/material/select';
// import * as L from 'leaflet';
// import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { StagesService } from '../../services/stage.service';
import { TicketsService } from '../../services/tickets.service';
import { Festival, } from '../../models/models.type';
import { AuthService } from '../../services/auth.service';
import { MatDialog, } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FestivalDialogComponent } from '../../components/festival-dialog/festival-dialog.component';
@Component({
  selector: 'app-festivals-admin',
  imports: [MATERIAL_FORM_IMPORTS,  MatSelectModule, MatCardModule, CommonModule, MatIconModule, MatExpansionModule],
  providers: [],
  templateUrl: './festivals-admin.component.html',
  styleUrl: './festivals-admin.component.scss'
})
export class FestivalsAdminComponent implements OnInit {
  stageForm!: FormGroup;
  private fb = inject(FormBuilder)
  festivalsService = inject(FestivalsService)
  stagesService = inject(StagesService)
  ticketsService = inject(TicketsService)
  authService = inject(AuthService)
  private dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar)

  console = console


  ngOnInit(): void {
    this.stageForm = this.fb.group({
      name: ['', Validators.required],
      festivalId: ['', Validators.required]
    })

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
      width: '80%',
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

  createStage(): void {
    if (this.stageForm.valid) {
      this.stagesService.createStage(this.stageForm.value).subscribe({
        next: res => {

        },
        error: err => {
          this.stagesService.error.set(err.error.message)
        }
      })
    }
  }
  openUpdateFestivalDialog(festival: Festival): void {
    console.log(festival)
    const dialogRef = this.dialog.open(FestivalDialogComponent, {
      width: '80%',
      data: { festival: festival }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      } else {
        console.log('Dialog closed without updating (cancelled)');
      }
    });
  }

  openAddStageDialog(festivalId: string): void {
    // const dialogRef = this.dialog.open(FestivalsAdminComponent, {
    //   width: '400px', // Set the width of the dialog
    //   data: { festivalId: festivalId } // Pass the festival ID to the dialog
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('Dialog closed with result (new stage):', result);
    //   } else {
    //     console.log('Dialog closed without creating stage (cancelled)');
    //   }
    // });
  }
}
