import { Component, Inject, inject, OnInit } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Festival } from '../../models/models.type';
import { Subject, takeUntil } from 'rxjs';
import * as L from 'leaflet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-festival-dialog',
  imports: [MATERIAL_FORM_IMPORTS, MatDatepickerModule, NgIf],
  providers: [provideNativeDateAdapter()],
  templateUrl: './festival-dialog.component.html',
  styleUrl: './festival-dialog.component.scss'
})
export class FestivalDialogComponent implements OnInit {
  fb = inject(FormBuilder)
  dialogRef = inject(MatDialogRef)
  festivalForm: FormGroup;
  isEditMode: boolean;
  map: L.Map | undefined;
  marker: L.Marker | undefined;

  private destroy$ = new Subject<void>();


  constructor(@Inject(MAT_DIALOG_DATA) public data: { festival?: Festival }) {
    this.isEditMode = !!data.festival
    this.festivalForm = this.fb.group({
      name: [data.festival?.name, Validators.required],
      latitude: [data.festival?.latitude, Validators.required],
      longitude: [data.festival?.longitude, Validators.required],
      start_date: [data.festival?.start_date, [Validators.required]],
      end_date: [data.festival?.end_date, Validators.required],
    });
  }

  ngOnInit(): void {
    this.festivalForm.get('latitude')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(lat => this.updateMarkerLocation());
    this.festivalForm.get('longitude')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(lon => this.updateMarkerLocation());
  }
  ngAfterViewInit(): void {
    // Delay map initialization slightly to ensure dialog is rendered and has dimensions
    setTimeout(() => {
      this.initMap();
      this.updateMarkerLocation();
    }, 0);
  }
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove(); // Clean up map instance
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initMap(): void {
    if (document.getElementById('festivalMap')) {
      const initialCoords: L.LatLngExpression = this.festivalForm.value.latitude && this.festivalForm.value.longitude
        ? [this.festivalForm.value.latitude, this.festivalForm.value.longitude]
        : [42.70, 23.32];

      this.map = L.map('festivalMap', {
        center: initialCoords,
        zoom: 2,
        zoomControl: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.map.on('click', (e: L.LeafletMouseEvent) => {
        this.festivalForm.patchValue({
          latitude: e.latlng.lat,
          longitude: e.latlng.lng
        });
      });

      if (initialCoords[0] !== 0 || initialCoords[1] !== 0) {
        this.marker = L.marker(initialCoords).addTo(this.map);
        this.map.setView(initialCoords, 10);
      }
    } else {
      console.warn('Map element "festivalMap" not found or not ready.');
    }
  }

  private updateMarkerLocation(): void {
    const lat = this.festivalForm.get('latitude')?.value;
    const lon = this.festivalForm.get('longitude')?.value;

    if (this.map && lat && lon && lat !== 0 && lon !== 0) {
      const newLatLng: L.LatLngExpression = [lat, lon];
      if (this.marker) {
        this.marker.setLatLng(newLatLng);
      } else {
        this.marker = L.marker(newLatLng).addTo(this.map);
      }
      this.map.setView(newLatLng, this.map.getZoom() || 10);
    } else if (this.marker) {
      this.map?.removeLayer(this.marker);
      this.marker = undefined;
    }
  }

  onSave(): void {
    if (this.festivalForm.valid) {
      this.dialogRef.close(this.festivalForm.value);
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
