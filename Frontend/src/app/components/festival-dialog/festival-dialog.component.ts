import { Component, Inject, inject, OnInit } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Festival } from '../../models/models.type';
import { debounceTime, distinctUntilChanged, filter, map, Observable, Subject, takeUntil } from 'rxjs';
import * as L from 'leaflet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-festival-dialog',
  imports: [MATERIAL_FORM_IMPORTS, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './festival-dialog.component.html',
  styleUrl: './festival-dialog.component.scss'
})
export class FestivalDialogComponent implements OnInit {
  fb = inject(FormBuilder)
  dialogRef = inject(MatDialogRef)
  private http = inject(HttpClient);
  festivalForm: FormGroup;
  isEditMode: boolean;
  map: L.Map | undefined;
  marker: L.Marker | undefined;

  festivalId?: string;

  private destroy$ = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { festival?: Festival }) {
    this.isEditMode = !!data.festival
    this.festivalId = data.festival?.id

    this.festivalForm = this.fb.group({
      name: [data.festival?.name, Validators.required],
      latitude: [data.festival?.latitude, [Validators.required, Validators.min(-90), Validators.max(90)]],
      longitude: [data.festival?.longitude, [Validators.required, Validators.min(-180), Validators.max(180)]],
      address: [data.festival?.address || ''],
      start_date: [data.festival?.start_date, [Validators.required]],
      end_date: [data.festival?.end_date, Validators.required],
    });


  }

  ngOnInit(): void {
    this.festivalForm.get('latitude')?.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(lat => {
        let latitiude = parseFloat(lat);
        const fixed = Math.max(-90, Math.min(90, latitiude));
        if (!isNaN(latitiude) && latitiude !== fixed) {
          this.festivalForm.get('latitude')?.patchValue(fixed, { emitEvent: false });
        }
        return fixed;
      }),
      filter(lat => typeof lat === 'number' && !isNaN(lat)),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(() => this.onCoordsChange());

    this.festivalForm.get('longitude')?.valueChanges.pipe(
      takeUntil(this.destroy$),
      map(lon => {
        let longitude = parseFloat(lon);
        const fixed = Math.max(-180, Math.min(180, longitude));
        if (!isNaN(longitude) && longitude !== fixed) {
          this.festivalForm.get('longitude')?.patchValue(fixed, { emitEvent: false });
        }
        return fixed;
      }),
      filter(lon => typeof lon === 'number' && !isNaN(lon)),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(() => this.onCoordsChange());

    // if (this.isEditMode && this.festivalForm.value.latitude && this.festivalForm.value.longitude) {
    //   this.onCoordsChange();
    // }
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
      this.updateMarkerLocation();
      if (this.map) {
        this.map.invalidateSize();
      }
    }, 500);
  }
  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
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
        zoom: 10,
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

  private onCoordsChange(): void {
    this.updateMarkerLocation();

    const lat = this.festivalForm.get('latitude')?.value;
    const lon = this.festivalForm.get('longitude')?.value;

    if (typeof lat === 'number' && typeof lon === 'number' && !isNaN(lat) && !isNaN(lon) && (lat !== 0 || lon !== 0)) {
      this.getAddressFromCoords(lat, lon).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (address) => {
          this.festivalForm.patchValue({ address: address });
          console.log('Address updated:', address); // For debugging
        },
        error: (err) => {
          console.error('Error fetching address:', err);
          this.festivalForm.patchValue({ address: 'Address not found' }); // Provide fallback
        }
      });
    } else {
      this.festivalForm.patchValue({ address: '' });
    }
  }
  getAddressFromCoords(lat: number, lon: number): Observable<string> {
    return this.http.get<any>(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    ).pipe(map(res => res.display_name));
  }

  onSave(): void {
    if (this.festivalForm.valid) {
      const formData = this.festivalForm.getRawValue();

      const payload = {
        ...formData,
        ...(this.festivalId ? { id: this.festivalId } : {})
      }

      this.dialogRef.close(payload);
    }
    
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
