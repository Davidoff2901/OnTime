import { Component, computed} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { isLoading } from '../../signals/loader.signal';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports: [MatProgressSpinnerModule, NgIf],
})
export class LoaderComponent {
  loading = computed(() => isLoading());
}