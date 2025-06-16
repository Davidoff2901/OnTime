import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { UserService } from '../../services/users.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { onInputChange, passwordsMatchValidator } from '../reset-password/reset-password.component';

export function updatePasswordTooltip(password: string): string {
  const hasMinLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  let message = 'Password requirements:';
  message += `\n${hasMinLength ? '✅' : '❌'} At least 6 characters`;
  message += `\n${hasUppercase ? '✅' : '❌'} At least one uppercase letter`;
  message += `\n${hasDigit ? '✅' : '❌'} At least one number`;
  message += `\n${hasSpecialChar ? '✅' : '❌'} At least one special character`;

  return message;
}

@Component({
  selector: 'app-register',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule, MatTooltipModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  userService = inject(UserService)
  registerForm: FormGroup;
  passwordTooltipMessage: string = '';
  showPasswordTooltip: boolean = false

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/)]],
      confirm_password: ['']
    }, { validators: passwordsMatchValidator("password", "confirm_password") });
  }

  ngOnInit(): void {
    this.registerForm.get('password')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.passwordTooltipMessage = updatePasswordTooltip(value);
      });

    this.passwordTooltipMessage = updatePasswordTooltip('');

  }

  onPasswordInputChange() {
    this.showPasswordTooltip = onInputChange(this.registerForm, 'password')
  }

  onSubmit(): void {
    this.userService.createUser(this.registerForm.value).subscribe({
      next: res => {
      },
      error: err => {
        this.userService.error.set(err.error.message)
      }
    })
  }
}
