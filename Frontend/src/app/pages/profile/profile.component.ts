import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ChangePasswordDialogComponent } from '../../components/change-password-dialog/change-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  imports: [MATERIAL_FORM_IMPORTS, MatCardModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  fb = inject(FormBuilder)
  authService = inject(AuthService)
  userService = inject(UserService)
  snackBar = inject(MatSnackBar)
  dialog = inject(MatDialog)

  ngOnInit(): void {
    const userInfo = this.authService.decodeToken()
    this.profileForm = this.fb.group({
      first_name: [userInfo.first_name, Validators.required],
      last_name: [userInfo.last_name, Validators.required],
      birthday: [userInfo.birthday, Validators.required],
      email: [userInfo.email, Validators.required],
      phone: [userInfo.phone, Validators.required],
      country_code: [userInfo.country_code, Validators.required],
    })
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.userService.updateUser(this.profileForm.value).subscribe({
      next: res => {
        this.authService.setToken(res.token)
        localStorage.setItem('token', res.token)
        this.snackBar.open(`User updated successfully!`, 'Close', { duration: 2000 });
      },
      error: err => {
        this.userService.error.set(err.error.message)
      }
    })
  }

  openChangePasswordDialog() {
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent, {
      data: { email: this.authService.getEmail() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.changePassword(result).subscribe({
          next: res => {
            this.snackBar.open(`Password changed successfully!`, 'Close', { duration: 2000 });
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
}
