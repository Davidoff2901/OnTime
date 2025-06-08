import { Component, inject, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FestivalsService } from '../../services/festivals.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import * as L from 'leaflet';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { StagesService } from '../../services/stage.service';

@Component({
  selector: 'app-festivals-admin',
  imports: [MATERIAL_FORM_IMPORTS, MatDatepickerModule, ReactiveFormsModule, MatSelectModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './festivals-admin.component.html',
  styleUrl: './festivals-admin.component.scss'
})
export class FestivalsAdminComponent implements OnInit {
  festivalForm!: FormGroup;
  stageForm!: FormGroup;
  festivalsService = inject(FestivalsService)
  stagesService = inject(StagesService)
  festivals = this.festivalsService.festivals

  map!: L.Map;
  marker!: L.Marker;
  updatingFromMap = false;
  formSub!: Subscription;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.festivalForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      start_date: ['', [Validators.required]],
      end_date: ['', Validators.required],
    });
    this.stageForm = this.fb.group({
      name: ['', Validators.required],
      festivalId: ['', Validators.required]
    })

    this.festivalsService.getFestivals().subscribe({
      next: res => {
        this.festivalsService.festivals.set(res)
      },
      error: err => {
        this.festivalsService.error.set(err)
      }
    })

  }
  ngAfterViewInit(): void {
    this.initMap();
    this.subscribeToFormChanges();
  }

  initMap(): void {
    this.map = L.map('map').setView([42.70, 23.32], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      this.setOrMoveMarker(lat, lng);
      this.updateForm(lat, lng);
    });
  }

  setOrMoveMarker(lat: number, lng: number) {
    if (this.marker) {
      this.marker.setLatLng([lat, lng]);
    } else {
      this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);
      this.marker.on('dragend', (event) => {
        const pos = (event.target as L.Marker).getLatLng();
        this.updateForm(pos.lat, pos.lng);
      });
    }
  }

  updateForm(lat: number, lng: number) {
    this.updatingFromMap = true;
    this.festivalForm.patchValue({
      latitude: lat,
      longitude: lng,
    }, { emitEvent: true });
    setTimeout(() => this.updatingFromMap = false, 100); // Short delay to avoid conflict
  }

  subscribeToFormChanges() {
    this.formSub = this.festivalForm.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged((prev, curr) =>
          prev.latitude === curr.latitude && prev.longitude === curr.longitude
        )
      )
      .subscribe(({ latitude, longitude }) => {
        if (!this.updatingFromMap && this.isValidLatLng(latitude, longitude)) {
          this.setOrMoveMarker(Number(latitude), Number(longitude));
          this.map.setView([Number(latitude), Number(longitude)], this.map.getZoom());
        }
      });
  }

  isValidLatLng(lat: any, lng: any): boolean {
    return !isNaN(lat) && !isNaN(lng) &&
      lat >= -90 && lat <= 90 &&
      lng >= -180 && lng <= 180;
  }

  ngOnDestroy(): void {
    this.formSub?.unsubscribe();
  }
  createFestival(): void {
    if (this.festivalForm.valid) {
      this.festivalsService.createFestival(this.festivalForm.value).subscribe({
        next: res => {

        },
        error: err => {
          this.festivalsService.error.set(err.error.message)
        }
      })
    }
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
}
