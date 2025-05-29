import { Component, inject } from '@angular/core';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { UserService } from '../../services/users.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [MATERIAL_FORM_IMPORTS, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userService = inject(UserService)
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: ['', Validators.required, Validators.email],
      password: ['']
    });
  }
  onSubmit(): void {
    this.userService.createUser(this.registerForm.value)
  }
}
