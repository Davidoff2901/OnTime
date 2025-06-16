import { Component, Inject, inject, OnInit } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Artist, musicGenres } from '../../models/models.type';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-artist-dialog',
  imports: [MATERIAL_FORM_IMPORTS, MatSelectModule],
  templateUrl: './artist-dialog.component.html',
  styleUrl: './artist-dialog.component.scss'
})
export class ArtistDialogComponent implements OnInit {
  fb = inject(FormBuilder)
  artistForm!: FormGroup;
  isEditMode: boolean;
  dialogRef = inject(MatDialogRef)

  musicGenres = musicGenres
  selectedSubgenres: string[] = [];
  artistId?: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { artist?: Artist }) {
    this.isEditMode = !!data.artist

    this.artistId = data.artist?.id

    this.artistForm = this.fb.group({
      name: [data.artist?.name, Validators.required],
      genre: [data.artist?.genre, Validators.required],
      subgenre: [{ value: data.artist?.subgenre, disabled: !this.isEditMode }, Validators.required],
      bio: [data.artist?.bio, Validators.required],
    });


  }

  ngOnInit(): void {
    if (this.isEditMode && this.data.artist?.genre) {
      const selectedGenre = this.musicGenres.find((genre) => genre.name === this.data.artist?.genre);
      if (selectedGenre) {
        this.selectedSubgenres = selectedGenre.subgenres;
      }
    }
  }

  onMainGenreChange(event: MatSelectChange): void {
    const selectedGenre = musicGenres.find((genre) => genre.name === event.value);

    if (selectedGenre) {
      this.selectedSubgenres = selectedGenre.subgenres;
      this.artistForm.get('subgenre')?.enable();
      this.artistForm.get('subgenre')?.setValue('');
    } else {
      this.selectedSubgenres = []
      this.artistForm.get('subgenre')?.disable();
      this.artistForm.get('subgenre')?.setValue('');
    }
  }

  onSave(): void {
    if (this.artistForm.valid) {
      const formData = this.artistForm.getRawValue();

      const payload = {
        ...formData,
        ...(this.artistId ? { id: this.artistId } : {})
      }

      this.dialogRef.close(payload);
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
