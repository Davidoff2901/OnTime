import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/users.service';
import { MatCardModule } from '@angular/material/card';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-forgot-password',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  userService = inject(UserService)
  fb = inject(FormBuilder)
  snackbar = inject(MatSnackBar)
  isLoading = false;


  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const { email } = this.forgotPasswordForm.value;

      this.userService.forgotPassword(email).subscribe({
        next: (response) => {
          this.snackbar.open(response.message, 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.forgotPasswordForm.reset();
        },
        error: (err) => {
          const errorMessage = err.error?.message || 'Failed to send reset link. Please try again.';
          this.snackbar.open(errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}
