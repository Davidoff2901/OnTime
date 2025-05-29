import { Component, inject } from '@angular/core';
import { UserService } from '../../services/users.service';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userService = inject(UserService)
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      identifier: [''],
      password: ['']
    });
  }
  onSubmit(): void {
    this.userService.loginUser(this.loginForm.value)
  }
}
