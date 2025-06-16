import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subject, takeUntil, } from 'rxjs';
import { UserService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { updatePasswordTooltip } from '../register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgIf } from '@angular/common';


export function passwordsMatchValidator(passwordField: string = 'new_password', confirmPasswordField: string = 'confirm_password'):
  ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(passwordField)?.value;
    const confirmPassword = formGroup.get(confirmPasswordField)?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      formGroup.get(confirmPasswordField)?.setErrors({ passwordsMismatch: true });
      return { passwordsMismatch: true };
    }

    return null;
  };
}
export function onInputChange(form: FormGroup, controlName: string) {
  const control = form.get(controlName);
  if (!control?.valid) {
    return true;
  }
  return false;
}

@Component({
  selector: 'app-reset-password',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, MatIconModule, NgIf, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  token: string | null = null;
  isValidToken$: Observable<boolean>;
  passwordTooltip: string | null = null
  showPasswordTooltip: boolean = false

  console = console

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.isValidToken$ = this.route.queryParams.pipe(
      map(params => {
        this.token = params['token'] || null;
        return !!this.token;
      })
    );
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      new_password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/)]],
      confirm_password: ['', [Validators.required]]
    }, { validator: passwordsMatchValidator() });

    this.resetPasswordForm.get('new_password')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.passwordTooltip = updatePasswordTooltip(value);
      });

    this.passwordTooltip = updatePasswordTooltip('');
  }

  onChange() {
    this.showPasswordTooltip = onInputChange(this.resetPasswordForm, 'new_password')
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid && this.token) {
      const { new_password } = this.resetPasswordForm.value;

      this.userService.resetPassword(this.token, new_password).subscribe({
        next: (response) => {
          this.snackBar.open(response.message, 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Reset password error:', err);
          const errorMessage = err.error?.message || 'Failed to reset password. Invalid or expired token.';
          this.snackBar.open(errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}
