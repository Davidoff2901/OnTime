import { Component, inject } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService)
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      identifier: [''],
      password: ['']
    });
  }
  onSubmit(): void {
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: res => {
        this.authService.setToken(res.data)
        this.router.navigate(["/lineup"])
      },
      error: err => {
        this.authService.error.set(err.error.message)
      }
    })
  }
}
