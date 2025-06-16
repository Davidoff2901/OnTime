import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ArtistsService } from '../../services/artist.service';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { Artist, musicGenres, Stage } from '../../models/models.type';
import { PerformancesService } from '../../services/performance.service';
import { StagesService } from '../../services/stage.service';
import { FestivalsService } from '../../services/festivals.service';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ArtistDialogComponent } from '../../components/artist-dialog/artist-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-artists-admin',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, MatIconModule, CommonModule, MatSelectModule],
  templateUrl: './artists-admin.component.html',
  styleUrl: './artists-admin.component.scss'
})
export class ArtistsAdminComponent implements OnInit {
  stagesService = inject(StagesService)
  artistsService = inject(ArtistsService)
  performanceService = inject(PerformancesService)
  festivalsService = inject(FestivalsService)
  authService = inject(AuthService)
  snackBar = inject(MatSnackBar)
  private dialog = inject(MatDialog);

  musicGenres = musicGenres

  searchName = signal<string>('');
  selectedGenre = signal<string>('All');
  selectedSubgenre = signal<string>('All');

  uniqueGenres = computed(() => {
    const genres = new Set<string>();
    this.artistsService.artists().forEach(artist => genres.add(artist.genre));
    return Array.from(genres).sort();
  });

  uniqueSubgenres = computed(() => {
    const subgenres = new Set<string>();
    const currentGenre = this.selectedGenre();
    this.artistsService.artists().forEach(artist => {
      if (currentGenre === 'All' || artist.genre === currentGenre) {
        subgenres.add(artist.subgenre);
      }
    });
    return Array.from(subgenres).sort();
  });
  filteredArtists = computed(() => {
    const term = this.searchName().toLowerCase();
    const genre = this.selectedGenre();
    const subgenre = this.selectedSubgenre();

    return this.artistsService.artists().filter(artist => {
      const matchesName = artist.name.toLowerCase().includes(term);
      const matchesGenre = genre === 'All' || artist.genre === genre;
      const matchesSubgenre = subgenre === 'All' || artist.subgenre === subgenre;

      return matchesName && matchesGenre && matchesSubgenre;
    });
  });

  ngOnInit(): void {
    this.loadArtists()
    
  }
  loadArtists() {
    this.artistsService.getArtists().subscribe({
      next: res => {
        this.artistsService.artists.set(res)
      },
      error: err => {
        this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
      }
    })
  }

  onSearchNameChange(name: string): void {
    this.searchName.set(name);
  }

  onGenreChange(genre: string): void {
    this.selectedGenre.set(genre);
    this.selectedSubgenre.set('All');
  }

  onSubgenreChange(subgenre: string): void {
    this.selectedSubgenre.set(subgenre);
  }

  openCreateArtistDialog() {
    const dialogRef = this.dialog.open(ArtistDialogComponent, {
      width: '80%',
      height: '80%',
      panelClass: 'custom-dialog-container',
      data: { artist: undefined }
    });

    dialogRef.afterClosed().subscribe((result: Artist) => {
      if (result) {
        this.artistsService.createArtist(result).subscribe({
          next: res => {
            this.snackBar.open(`Artist "${res.name}" created successfully!`, 'Close', { duration: 3000 });
            this.loadArtists();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
  openUpdateArtistDialog(artist: Artist) {
    const dialogRef = this.dialog.open(ArtistDialogComponent, {
      width: '80%',
      height: '80%',
      panelClass: 'custom-dialog-container',
      data: { artist: artist }
    });

    dialogRef.afterClosed().subscribe((result: Artist) => {
      if (result) {
        this.artistsService.updateArtist(result).subscribe({
          next: res => {
            this.snackBar.open(`Artist "${res.name}" updated successfully!`, 'Close', { duration: 3000 });
            this.loadArtists();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
}
