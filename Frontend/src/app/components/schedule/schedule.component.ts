import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Festival } from '../../models/models.type';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PerformancesService } from '../../services/performance.service';
import { MatSelectModule } from '@angular/material/select';
import { ArtistsService } from '../../services/artist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-schedule',
  imports: [MATERIAL_FORM_IMPORTS, MatDatepickerModule, MatTimepickerModule, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  performanceForm!: FormGroup
  performanceService = inject(PerformancesService)
  artistService = inject(ArtistsService)
  fb = inject(FormBuilder)
  dialogRef = inject(MatDialogRef)
  snackBar = inject(MatSnackBar)

  pickerStartAt = signal<Date | null>(null);
  selectedStageId = signal<string | null>(null);
  selectedDate = signal<Date | null>(null);
  minEndTime = signal<Date | null>(null);

  minTime = new Date(0, 0, 0, 8, 0); // 8:00 AM
  constructor(@Inject(MAT_DIALOG_DATA) public data: { festival: Festival }) {
    this.data.festival.start_date = new Date(this.data.festival.start_date);
    this.data.festival.end_date = new Date(this.data.festival.end_date);

  }

  ngOnInit(): void {
    this.performanceForm = this.fb.group({
      artistId: ['', Validators.required],
      festivalId: [this.data.festival.id, Validators.required],
      stageId: ['', Validators.required],
      day: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required]
    });

    this.pickerStartAt.set(this.data.festival.start_date);

    this.artistService.getArtists().subscribe({
      next: res => {
        this.artistService.artists.set(res)
      },
      error: err => {
        this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
      }
    })

    this.performanceForm.get('start_time')?.valueChanges.subscribe((startTime: Date) => {
      if (startTime) {
        const minDate = new Date(startTime);
        minDate.setMinutes(minDate.getMinutes() + 15);
        this.minEndTime.set(minDate);

        this.performanceForm.get('end_time')?.updateValueAndValidity();
      } else {
        this.minEndTime.set(null);
      }
    });
  }
  onStageIdChange(stageId: string | null): void {
    this.selectedStageId.set(stageId);
  }
  onDateChange(date: Date | null): void {
    this.selectedDate.set(date);
  }


  festivalDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    const festival = this.data.festival;

    if (!festival) {
      return false;
    }
    const festivalStart = new Date(festival.start_date.getFullYear(), festival.start_date.getMonth(), festival.start_date.getDate());
    const festivalEnd = new Date(festival.end_date.getFullYear(), festival.end_date.getMonth(), festival.end_date.getDate());
    const currentDay = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    return currentDay >= festivalStart && currentDay <= festivalEnd;
  };

  onSave(): void {
    if (this.performanceForm.valid) {
      this.dialogRef.close(this.performanceForm.value);
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
