import { Component, inject, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FestivalsService } from '../../services/festivals.service';
import { Festival, Stage, Performances } from '../../models/models.type';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, } from '@angular/forms';
import { Subscription, combineLatest, debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';
import moment from 'moment';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { PerformancesService } from '../../services/performance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { LineupService } from '../../services/lineup.service';
import { AuthService } from '../../services/auth.service';
import { FormatDatePipe, FormatTimePipe } from '../../helpers/formatters.pipe';


@Component({
  selector: 'app-festival',
  imports: [CommonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MATERIAL_FORM_IMPORTS,
    PrimaryButtonComponent,
    FormatDatePipe,
    FormatTimePipe],
  templateUrl: './festival.component.html',
  styleUrl: './festival.component.scss'
})
export class FestivalComponent implements OnInit {
  route = inject(ActivatedRoute)
  festivalService = inject(FestivalsService)
  authService = inject(AuthService)
  performancesService = inject(PerformancesService)
  lineupService = inject(LineupService)
  snackBar = inject(MatSnackBar)
  festival: Festival | null = null;
  selectedStage: Stage | null = null;
  performances: Performances[] = [];
  festivalId: string | null = null;

  filterForm = new FormGroup({
    day: new FormControl<Date | null>(null),
    artistName: new FormControl<string>('')
  });

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.festivalId = this.route.snapshot.paramMap.get('id');

    if (this.festivalId) {
      this.fetchFestivalDetails(this.festivalId);
    }

    this.setupFilterListeners();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  fetchFestivalDetails(festivalId: string): void {
    this.festivalService.getFestivalDetails(festivalId).subscribe({
      next: (data) => {
        this.festival = data;
        // if (this.festival) {
        //   this.festival.start_date = new Date(data.start_date as string);
        //   this.festival.end_date = new Date(data.end_date as string);
        // }


        if (this.festival && this.festival.stages && this.festival.stages.length > 0) {
          this.selectedStage = this.festival.stages[0];
          this.fetchPerformances();
        }
      },
      error: (err) => {
        this.snackBar.open(`Error fetching festival details: ${err}`, 'Close', { duration: 4000 });
      }
    });
  }


  onTabChange(event: any): void {
    if (this.festival && this.festival.stages) {
      this.selectedStage = this.festival.stages[event.index];
      this.fetchPerformances();
    }
  }

  setupFilterListeners(): void {
    this.subscriptions.add(
      combineLatest([
        this.filterForm.controls.day.valueChanges.pipe(
          startWith(this.filterForm.controls.day.value)
        ),
        this.filterForm.controls.artistName.valueChanges.pipe(
          startWith(this.filterForm.controls.artistName.value),
          debounceTime(300),
          distinctUntilChanged()
        )
      ]).subscribe(() => {
        this.fetchPerformances();
      })
    );
  }


  fetchPerformances(): void {
    if (!this.festivalId || !this.selectedStage) {
      this.performances = [];
      return;
    }

    const dayFilter = this.filterForm.controls.day.value;
    const artistNameFilter = this.filterForm.controls.artistName.value;

    const formattedDay = dayFilter ? moment(dayFilter).format('YYYY-MM-DD') : undefined;

    this.performancesService.getStagePerformances(this.festivalId, this.selectedStage.id, formattedDay, artistNameFilter || undefined).subscribe({
      next: (data) => {
        this.performances = data;
      },
      error: (err) => {
        this.snackBar.open(`No performances found`, 'Close', { duration: 4000 });
        this.performances = [];
      }
    });
  }

  addToLineup(festivalId: string, performanceId: string) {
    const payload = {
      email: this.authService.getEmail()!,
      festivalId: festivalId,
      artistPerformanceId: performanceId
    }
    this.lineupService.addToLineup(payload).subscribe({
      next: res => {
        this.snackBar.open(`Artist added to lineup`, 'Close', { duration: 4000 });
      },
      error: err =>{
        this.snackBar.open(err.error.message, 'Close', { duration: 4000 });

      }
    })
  }


  clearArtistNameFilter(): void {
    this.filterForm.controls.artistName.setValue('');
  }

  clearDayFilter(): void {
    this.filterForm.controls.day.setValue(null);
  }

}
