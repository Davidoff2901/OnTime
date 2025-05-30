import { Component, inject } from '@angular/core';
import { UserService } from '../../services/users.service';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userService = inject(UserService)
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      identifier: [''],
      password: ['']
    });
  }
  onSubmit(): void {
    this.userService.loginUser(this.loginForm.value).subscribe({
      next: res => {
        localStorage.setItem("token", res.data)
        this.router.navigate(["/lineup"])
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
