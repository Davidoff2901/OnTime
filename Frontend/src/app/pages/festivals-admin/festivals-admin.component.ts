import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FestivalsService } from '../../services/festivals.service';
import { catchError } from 'rxjs';
import { Festival } from '../../models/festival.type';

@Component({
  selector: 'app-festivals-admin',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule],
  templateUrl: './festivals-admin.component.html',
  styleUrl: './festivals-admin.component.scss'
})
export class FestivalsAdminComponent implements OnInit {
  form: FormGroup;
  festivalsService = inject(FestivalsService)
  festivals = signal<Array<Festival>>([]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['',],
    });
  }

  ngOnInit(): void {
    this.festivalsService.testGet()
      .pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe((data) => {
        this.festivals.set(data)
      })
  }

  submit() {
    if (this.form.valid) {

    }
  }
}
