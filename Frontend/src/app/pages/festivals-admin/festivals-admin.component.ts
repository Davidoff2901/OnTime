import { Component, inject, OnInit, signal } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FestivalsService } from '../../services/festivals.service';
import { catchError } from 'rxjs';
import { Festival } from '../../models/festival.type';
import { UserService } from '../../services/users.service';

interface test {
  username: string
  email: string
  password: string
}
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

  test = signal<any | null>(null);
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      name: ['',],
    });

    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: [''],
    });
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.form.valid) {

    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe({
        next: (res) => this.test.set(res),
        error: (err) => console.error('Error:', err),
      });
    }
  }
}
