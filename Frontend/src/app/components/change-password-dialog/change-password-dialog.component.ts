import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { onInputChange, passwordsMatchValidator } from '../../pages/reset-password/reset-password.component';
import { Subject, takeUntil } from 'rxjs';
import { updatePasswordTooltip } from '../../pages/register/register.component';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';

@Component({
  selector: 'app-change-password-dialog',
  imports: [MatDialogModule, MATERIAL_FORM_IMPORTS, ],
  templateUrl: './change-password-dialog.component.html',
  styleUrl: './change-password-dialog.component.scss'
})
export class ChangePasswordDialogComponent implements OnInit {
  changePasswordForm: FormGroup;
  private fb = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<ChangePasswordDialogComponent>);
  passwordTooltip: string | null = null
  showPasswordTooltip: boolean = false

  private destroy$ = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: { email: string }) {
    this.changePasswordForm = this.fb.group({
      email: [data.email],
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/)]],
      confirm_password: ['', [Validators.required]]
    }, { validators: passwordsMatchValidator("new_password", 'confirm_password') });
  }

  ngOnInit(): void {
    this.changePasswordForm.get('new_password')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.passwordTooltip = updatePasswordTooltip(value);
      });

    this.passwordTooltip = updatePasswordTooltip('');
  }
  onChange() {
    this.showPasswordTooltip = onInputChange(this.changePasswordForm, 'new_password')
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      this.dialogRef.close(this.changePasswordForm.value);
    }
  }
}
