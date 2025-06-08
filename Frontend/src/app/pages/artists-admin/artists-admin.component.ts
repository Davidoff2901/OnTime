import { Component, computed, inject, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArtistsService } from '../../services/artist.service';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatSelectChange } from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { Festival, musicGenres, Stage } from '../../models/models.type';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PerformancesService } from '../../services/performance.service';
import { StagesService } from '../../services/stage.service';
import { FestivalsService } from '../../services/festivals.service';
import { AuthService } from '../../services/auth.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-artists-admin',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule, MatDatepickerModule, MatSelectModule, MatTimepickerModule],
  templateUrl: './artists-admin.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './artists-admin.component.scss'
})
export class ArtistsAdminComponent implements OnInit {
  artistForm!: FormGroup;
  performanceForm!: FormGroup
  stagesService = inject(StagesService)
  artistsService = inject(ArtistsService)
  performanceService = inject(PerformancesService)
  festivalsService = inject(FestivalsService)
  authService = inject(AuthService)
  fb = inject(FormBuilder)

  musicGenres = musicGenres
  stages = signal<Stage[] | null>(null);

  selectedFestivalId = signal<string | null>(null);
  selectedStageId = signal<string | null>(null);
  selectedDate = signal<Date | null>(null);

  selectedFestival = computed(() => {
    const festivalId = this.selectedFestivalId();
    if (festivalId === null) {
      return null;
    }
    return this.festivalsService.festivals().find(f => f.id === festivalId) || null;
  });

  selectedStage = computed(() => {
    const stageId = this.selectedStageId();
    const festival = this.selectedFestival();
    if (stageId === null || !festival) {
      return null;
    }
    return festival.stages?.find(s => s.id === stageId) || null;
  });

  selectedMainGenreName: string = '';
  selectedSubgenres: string[] = [];

  ngOnInit(): void {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      genre: [{ value: '', disabled: true }, Validators.required],
    });
    this.performanceForm = this.fb.group({
      artistId: ['', Validators.required],
      festivalId: ['', Validators.required],
      stageId: [{ value: '', disabled: true }, Validators.required],
      day: [{ value: '', disabled: true }, Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required]
    });

    this.artistsService.getArtists().subscribe({
      next: res => {
        this.artistsService.artists.set(res)
      },
      error: err => {
        console.log(err)
        this.artistsService.error.set(err)
      }
    })
    this.festivalsService.getFestivalsByOrganizer(this.authService.getEmail()!).subscribe({
      next: res => {
        const processed: Festival[] = res.map(item => ({
          ...item,
          start_date: new Date(item.start_date),
          end_date: new Date(item.end_date)
        }))
        this.festivalsService.festivals.set(processed)

      },
      error: err => {

      }
    })

  }

  onMainGenreChange(event: MatSelectChange): void {
    const selectedGenreName = event.value;
    this.selectedMainGenreName = selectedGenreName; // Update the variable for display logic

    const selectedGenre = musicGenres.find((genre) => genre.name === selectedGenreName);

    if (selectedGenre) {
      this.selectedSubgenres = selectedGenre.subgenres;
      this.artistForm.get('genre')?.enable();
      this.artistForm.get('genre')?.setValue('');
    } else {
      this.selectedSubgenres = [];
      this.artistForm.get('genre')?.disable();
      this.artistForm.get('genre')?.setValue('');
    }
  }
  onFestivalIdChange(festivalId: string | null): void {
    this.selectedFestivalId.set(festivalId);
    this.selectedStageId.set(null);
    this.selectedDate.set(null)
    this.performanceForm.get('day')?.enable()
    this.performanceForm.get('stageId')?.enable()
    this.performanceForm.get('festivalId')?.setValue(this.selectedFestivalId())
  }

  onStageIdChange(stageId: string | null): void {
    this.selectedStageId.set(stageId);
  }
  onDateChange(date: Date | null): void {
    this.selectedDate.set(date);
  }

  festivalDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    const festival = this.selectedFestival();

    if (!festival) {
      return false;
    }
    console.log(festival)
    const festivalStart = new Date(festival.start_date.getFullYear(), festival.start_date.getMonth(), festival.start_date.getDate());
    const festivalEnd = new Date(festival.end_date.getFullYear(), festival.end_date.getMonth(), festival.end_date.getDate());
    const currentDay = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    return currentDay >= festivalStart && currentDay <= festivalEnd;
  };


  createArtist(): void {
    if (this.artistForm.valid) {
      this.artistsService.createArtist(this.artistForm.value).subscribe({
        next: res => {
          this.artistsService.error.set("")
        },
        error: err => {
          this.artistsService.error.set(err.error.message)
        }
      })
    }
  }
  createPreformance(): void {

    if (this.performanceForm.valid) {
      this.performanceService.createPerformance(this.performanceForm.value).subscribe({
        next: res => {
          this.performanceService.error.set("")
        },
        error: err => {
          this.performanceService.error.set(err.error.message)
        }
      })
    }
  }
}
